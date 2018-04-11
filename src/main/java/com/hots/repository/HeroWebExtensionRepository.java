package com.hots.repository;

import com.hots.model.HeroDetails;
import com.hots.model.HeroWebExtension;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface HeroWebExtensionRepository extends JpaRepository<HeroWebExtension,Long> {
}
