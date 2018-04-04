package com.hots.service.dictionary;

import com.hots.service.ReadOnlyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.support.Repositories;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
public abstract class DictionaryService<T,Repository extends JpaRepository<T,Long>>
        extends ReadOnlyService<T,Repository>{
}
