package com.hots.service.dictionary;

import com.hots.model.dictionary.HeroSubgroup;
import com.hots.model.dictionary.Map;
import com.hots.repository.dictionary.HeroSubgroupRepository;
import com.hots.repository.dictionary.MapRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class MapService extends DictionaryService<Map,MapRepository> {
}
