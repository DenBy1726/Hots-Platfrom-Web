package com.hots.service.dictionary;

import com.hots.model.dictionary.Map;
import com.hots.model.dictionary.ResourceType;
import com.hots.repository.dictionary.MapRepository;
import com.hots.repository.dictionary.ResourceTypeRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class ResourceTypeService extends DictionaryService<ResourceType,ResourceTypeRepository> {
}
