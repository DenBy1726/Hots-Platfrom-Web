package com.hots.repository.dictionary;

import com.hots.model.dictionary.Difficulty;
import com.hots.model.dictionary.Franchise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface FranchiseRepository extends JpaRepository<Franchise,Long> {
}
