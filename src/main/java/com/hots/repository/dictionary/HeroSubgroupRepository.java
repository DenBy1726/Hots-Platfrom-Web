package com.hots.repository.dictionary;

import com.hots.model.dictionary.HeroGroup;
import com.hots.model.dictionary.HeroSubgroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface HeroSubgroupRepository extends JpaRepository<HeroSubgroup,Long> {
}
