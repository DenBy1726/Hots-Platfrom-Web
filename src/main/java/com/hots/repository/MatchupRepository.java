
package com.hots.repository;

import com.hots.model.Matchup;
import com.hots.model.Statistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Repository
public interface MatchupRepository extends JpaRepository<Matchup, Long> {

    List<Matchup> findByFirst(long first);

    List<Matchup> findByFirstAndSecond(long first,long second);
}
