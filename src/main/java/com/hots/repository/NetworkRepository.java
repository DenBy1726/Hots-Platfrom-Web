package com.hots.repository;

import com.hots.model.Network;
import com.hots.model.Statistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sun.nio.ch.Net;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Repository
public interface NetworkRepository extends JpaRepository<Network, Long> {

    Network findById(long id);

    @Query("select net from Network net " +
            "inner join net.dataset dataset " +
            "where dataset.id = :id")
    List<Network> findByDataset(@Param("id") long id);

}
