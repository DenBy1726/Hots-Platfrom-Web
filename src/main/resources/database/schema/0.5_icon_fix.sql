UPDATE herowebextension as w
SET iconurl = 'https://www.heroesprofile.com/includes/images/heroes/' ||
                      replace(
                              replace(
                                      replace(
                                              replace(
                                                      lower((
                                                          SELECT h.name
                                                          from herowebextension
                                                                   LEFT JOIN hero h on herowebextension.id = h.id
                                                          where w.id = h.id
                                                      )),
                                                      '''', ''),
                                              '.', ''),
                                      ' ', ''),
                              '-', '')
    || '.png'

UPDATE herowebextension
set iconurl = 'https://www.heroesprofile.com/includes/images/heroes/lucio.png'
where id = 62