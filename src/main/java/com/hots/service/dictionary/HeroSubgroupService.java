package com.hots.service.dictionary;

import com.hots.model.dictionary.HeroGroup;
import com.hots.model.dictionary.HeroSubgroup;
import com.hots.repository.dictionary.HeroGroupRepository;
import com.hots.repository.dictionary.HeroSubgroupRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class HeroSubgroupService extends DictionaryService<HeroSubgroup,HeroSubgroupRepository> {
}
