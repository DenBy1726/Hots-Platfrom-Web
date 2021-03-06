package com.hots.repository.dictionary;

import com.hots.model.dictionary.Map;
import com.hots.model.dictionary.ResourceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface ResourceTypeRepository extends JpaRepository<ResourceType,Long> {
}
