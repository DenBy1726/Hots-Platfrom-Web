package com.hots.repository;

import com.hots.model.Hero;
import com.hots.model.HeroClusters;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface HeroClustersRepository extends JpaRepository<HeroClusters,Long> {
}
