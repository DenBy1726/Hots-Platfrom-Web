package com.hots.repository;

import com.hots.model.HeroClusters;
import com.hots.model.HeroDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface HeroDetailsRepository extends JpaRepository<HeroDetails,Long> {
}
