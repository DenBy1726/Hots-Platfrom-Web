package com.hots.repository;

import com.hots.model.Dataset;
import com.hots.model.Network;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Repository
public interface DatasetRepository extends JpaRepository<Dataset, Long> {

    Dataset findById(long id);

}
