package com.hots.repository.auth;

import com.hots.model.auth.Role;
import com.hots.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 13.04.2018.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByGithubId(String id);

    User findUserByFacebookId(String id);

    User findUserByGoogleId(String id);
}
