package com.hots.service;

import com.hots.model.auth.Role;
import com.hots.model.auth.User;
import com.hots.model.auth.UserDetails;
import com.hots.repository.auth.RoleRepository;
import com.hots.repository.auth.UserDetailsRepository;
import com.hots.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Set;

/**
 * Created by Denis on 13.04.2018.
 */
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserDetailsRepository userDetailsRepository;

    @Transactional
    public User persistGitUser(Authentication authentication) {
        LinkedHashMap details = (LinkedHashMap)authentication.getDetails();
        String id =  details.get("id").toString();
        User user = userRepository.findUserByGithubId(id);
        if (user == null)
            user = new User();

        String principal = authentication.getPrincipal().toString();
        Set<Role> roles = new HashSet<>();
        for (GrantedAuthority role : authentication.getAuthorities()) {
            roles.add(roleRepository.findRoleByName(role.getAuthority()));
        }

        UserDetails userDetails = new UserDetails();

        userDetails.setName((String) details.get("name"));
        userDetails.setImage((String)details.get("avatar_url"));
        userDetails.setPrincipal(principal);
        user.setGithubId(id);
        user.setDetails(userDetails);
        user.setRole(roles);

        return userRepository.save(user);
    }

    @Transactional
    public User persistGoogleUser(Authentication authentication){
        LinkedHashMap details = (LinkedHashMap)authentication.getDetails();
        String id = details.get("id").toString();
        User user = userRepository.findUserByGoogleId(id);
        if (user == null)
            user = new User();

        String principal = authentication.getPrincipal().toString();
        Set<Role> roles = new HashSet<>();
        for (GrantedAuthority role : authentication.getAuthorities()) {
            roles.add(roleRepository.findRoleByName(role.getAuthority()));
        }

        UserDetails userDetails = new UserDetails();

        userDetails.setName((String) details.get("name"));
        userDetails.setImage((String)details.get("picture"));
        userDetails.setPrincipal(principal);
        user.setGoogleId(id);
        user.setDetails(userDetails);
        user.setRole(roles);
        return userRepository.save(user);
    }

    @Transactional
    public User persistFacebookUser(Authentication authentication){
        LinkedHashMap details = (LinkedHashMap)authentication.getDetails();
        String id = details.get("id").toString();
        User user = userRepository.findUserByFacebookId(id);
        if (user == null)
            user = new User();
        String principal = authentication.getPrincipal().toString();
        Set<Role> roles = new HashSet<>();
        for (GrantedAuthority role : authentication.getAuthorities()) {
            roles.add(roleRepository.findRoleByName(role.getAuthority()));
        }

        UserDetails userDetails = new UserDetails();

        userDetails.setName((String) details.get("name"));
        userDetails.setImage("https://graph.facebook.com/v2.12/" + id + "/picture?access_token");
        userDetails.setPrincipal(principal);

        user.setFacebookId(id);
        user.setDetails(userDetails);
        user.setRole(roles);
        return userRepository.save(user);
    }

}
