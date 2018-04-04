package com.hots.service.dictionary;

import com.hots.model.dictionary.Franchise;
import com.hots.model.dictionary.GameMode;
import com.hots.repository.dictionary.FranchiseRepository;
import com.hots.repository.dictionary.GameModeRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class GameModeService extends DictionaryService<GameMode,GameModeRepository> {
}
