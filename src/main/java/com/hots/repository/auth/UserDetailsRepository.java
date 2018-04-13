package com.hots.repository.auth;

import com.hots.model.auth.User;
import com.hots.model.auth.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 13.04.2018.
 */
public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {
}
