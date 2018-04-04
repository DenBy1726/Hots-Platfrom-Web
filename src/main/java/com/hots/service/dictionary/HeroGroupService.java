package com.hots.service.dictionary;

import com.hots.model.dictionary.GameMode;
import com.hots.model.dictionary.HeroGroup;
import com.hots.repository.dictionary.GameModeRepository;
import com.hots.repository.dictionary.HeroGroupRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class HeroGroupService extends DictionaryService<HeroGroup,HeroGroupRepository> {
}
