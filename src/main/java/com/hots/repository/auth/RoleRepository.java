package com.hots.repository.auth;

import com.hots.model.Dataset;
import com.hots.model.auth.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 13.04.2018.
 */
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findRoleByName(String name);
}
