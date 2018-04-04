package com.hots.service.dictionary;

import com.hots.model.dictionary.Difficulty;
import com.hots.repository.dictionary.DifficultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class DifficultyService extends DictionaryService<Difficulty,DifficultyRepository> {

}
