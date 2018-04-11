package com.hots.service;

import com.hots.model.HeroDetails;
import com.hots.model.HeroWebExtension;
import com.hots.repository.HeroDetailsRepository;
import com.hots.repository.HeroWebExtensionRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 06.04.2018.
 */
@Service
public class HeroWebExtensionService extends HeroAbstractService<HeroWebExtension, HeroWebExtensionRepository>{
}
