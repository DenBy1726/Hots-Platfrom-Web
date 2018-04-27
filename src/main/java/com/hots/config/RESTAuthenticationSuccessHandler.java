package com.hots.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hots.model.auth.Role;
import com.hots.model.auth.User;
import com.hots.model.auth.UserDetails;
import com.hots.repository.auth.RoleRepository;
import com.hots.repository.auth.UserRepository;
import com.hots.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

/**
 * Created by Denis on 13.04.2018.
 */
@Component
public class RESTAuthenticationSuccessHandler  extends SimpleUrlAuthenticationSuccessHandler {

    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Autowired
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    @Qualifier("authenticationManager")
    AuthenticationManager authenticationManager;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        Authentication auth = ((OAuth2Authentication)authentication).getUserAuthentication();
        User user = new User();
        switch(request.getServletPath().split("/")[3]){
            case "github":
                user = userService.persistGitUser(auth);
                break;
            case "google":
                user = userService.persistGoogleUser(auth);
                break;
            case "facebook":
                user = userService.persistFacebookUser(auth);
                break;
        }
        user.getDetails().setId(user.getId());
        Map<String, Object> map = objectMapper.convertValue(user.getDetails(), Map.class);
        map.put("role",user.getRole());
        ((OAuth2Authentication) authentication).setDetails(map);
        Authentication customAuth =
                new OAuth2Authentication(
                        ((OAuth2Authentication) authentication).getOAuth2Request(),
                        authentication);
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(customAuth);

        String targetUrl = determineTargetUrl(request, response);
        redirectStrategy.sendRedirect(request, response, targetUrl);
    }
}
