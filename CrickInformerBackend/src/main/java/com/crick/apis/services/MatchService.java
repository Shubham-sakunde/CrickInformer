package com.crick.apis.services;

import com.crick.apis.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {

    //get all matches
    List<Match> getAllMatches();
    //get live matches
    List<Match> getAllLiveMatches();

    //get cwc2023 pointTable
    List<List<String>> getPointTable();


}
