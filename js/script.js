// объект с альбомами
let albumsObj = {
         album1 : {
                     title: "One More Light",
                     artist: "Linkin Park",
                     year: 2017,
                     genre: 'Alternative / Pop-Rock',
                     thumb: "thumb1.png",
                     songs: {
                        1: {
                              name: "Nobody Can Save Me",
                              duration: "03:46",
                              src: "Linkin Park - One More Light/01- Nobody Can Save Me.mp3",
                        }, 
                        2: {
                              name: "Good Goodbye (Feat. Pusha T And Stormzy)",
                              duration: "03:31",
                              src: "Linkin Park - One More Light/02 - Good Goodbye feat Pusha T and Stormzy.mp3",
                        },
                        3: {
                              name: "Talking To Myself",
                              duration: "03:51",
                              src: "Linkin Park - One More Light/03_linkin_park_talking_to_myself_myzuka.mp3",
                        },
                        4: {
                              name: "Battle Symphony",
                              duration: "03:36",
                              src: "Linkin Park - One More Light/04_linkin_park_battle_symphony_myzuka.mp3",
                        },
                        5: {
                              name: "Invisible",
                              duration: "03:34",
                              src: "Linkin Park - One More Light/05_linkin_park_invisible_myzuka.mp3",
                        },
                        6: {
                              name: "Heavy (Feat. Kiiara)",
                              duration: "02:50",
                              src: "Linkin Park - One More Light/06_linkin_park_heavy_feat_kiiara_myzuka.mp3",
                        },
                        7: {
                              name: "Sorry For Now",
                              duration: "03:24",
                              src: "Linkin Park - One More Light/07_linkin_park_sorry_for_now_myzuka.mp3",
                        },
                        8: {
                              name: "Halfway Right",
                              duration: "03:37",
                              src: "Linkin Park - One More Light/08_linkin_park_halfway_right_myzuka.mp3",
                        },
                        9: {
                              name: "One More Light",
                              duration: "04:15",
                              src: "Linkin Park - One More Light/09_linkin_park_one_more_light_myzuka.mp3",
                        },
                        10: {
                              name: "Sharp Edges",
                              duration: "02:58",
                              src: "Linkin Park - One More Light/10_linkin_park_sharp_edges_myzuka.mp3",
                        },
                     },
                  },
         album2 : {
                     title: "A Beautiful Lie",
                     artist: "30 Seconds To Mars",
                     year: 2005,
                     genre: 'Alternative Rock',
                     thumb: "thumb2.png",
                     songs: {
                        1: {
                           name: "Attack",
                           duration: "03:09",
                           src: "30 seconds to Mars - A Beautiful Lie/01 Attack.mp3",
                        }, 
                        2: {
                              name: "A Beautiful Lie",
                              duration: "04:06",
                              src: "30 seconds to Mars - A Beautiful Lie/02 A Beautiful Lie.mp3",
                        },
                        3: {
                              name: "The Kill",
                              duration: "03:51",
                              src: "30 seconds to Mars - A Beautiful Lie/03 The Kill.mp3",
                        },
                        4: {
                              name: "Was It A Dream",
                              duration: "04:15",
                              src: "30 seconds to Mars - A Beautiful Lie/04 Was It A Dream.mp3",
                        },
                        5: {
                              name: "Invisible",
                              duration: "04:29",
                              src: "30 seconds to Mars - A Beautiful Lie/05 The Fantasy.mp3",
                        },
                        6: {
                              name: "Savior",
                              duration: "03:12",
                              src: "30 seconds to Mars - A Beautiful Lie/06 Savior.mp3",
                        },
                        7: {
                              name: "From Yesterday",
                              duration: "04:09",
                              src: "30 seconds to Mars - A Beautiful Lie/07 From Yesterday.mp3",
                        },
                        8: {
                              name: "The Story",
                              duration: "03:56",
                              src: "30 seconds to Mars - A Beautiful Lie/08 The Story.mp3",
                        },
                        9: {
                              name: "R-Evolve",
                              duration: "03:59",
                              src: "30 seconds to Mars - A Beautiful Lie/09 R-Evolve.mp3",
                        },
                        10: {
                              name: "A Modern Myth",
                              duration: "03:00",
                              src: "30 seconds to Mars - A Beautiful Lie/10 A Modern Myth.mp3",
                        },
                        11: {
                              name: "Battle Of One",
                              duration: "02:47",
                              src: "30 seconds to Mars - A Beautiful Lie/11 Battle Of One.mp3",
                        },
                        12: {
                           name: "Hunter",
                           duration: "03:54",
                           src: "30 seconds to Mars - A Beautiful Lie/12 Hunter.mp3",
                        },
                        13: {
                           name: "The Kill (Rebirth)",
                           duration: "03:40",
                           src: "30 seconds to Mars - A Beautiful Lie/13 Bonus Track The Kill (Rebirth).mp3",
                        },
                     }
                  },
         album3 : {
                     title: "Threat To Survival",
                     artist: "Shinedown",
                     year: 2015,
                     genre: 'Alternative Rock / Pop-Rock',
                     thumb: "thumb3.png",
                     songs: {
                        1: {
                           name: "Asking For It",
                           duration: "03:31",
                           src: "Shinedown - Threat To Survival/01_shinedown_asking_for_it_myzuka.mp3",
                        }, 
                        2: {
                              name: "Cut The Cord",
                              duration: "03:45",
                              src: "Shinedown - Threat To Survival/02_shinedown_cut_the_cord_myzuka.mp3",
                        },
                        3: {
                              name: "State Of My Head",
                              duration: "03:25",
                              src: "Shinedown - Threat To Survival/03_shinedown_state_of_my_head_myzuka.mp3",
                        },
                        4: {
                              name: "Outcast",
                              duration: "03:26",
                              src: "Shinedown - Threat To Survival/04_shinedown_outcast_myzuka.mp3",
                        },
                        5: {
                              name: "How Did You Love",
                              duration: "03:07",
                              src: "Shinedown - Threat To Survival/05_shinedown_how_did_you_love_myzuka.mp3",
                        },
                        6: {
                              name: "It All Adds Up",
                              duration: "03:51",
                              src: "Shinedown - Threat To Survival/06_shinedown_it_all_adds_up_myzuka.mp3",
                        },
                        7: {
                              name: "Oblivion",
                              duration: "03:57",
                              src: "Shinedown - Threat To Survival/07_shinedown_oblivion_myzuka.mp3",
                        },
                        8: {
                              name: "Dangerous",
                              duration: "03:52",
                              src: "Shinedown - Threat To Survival/08_shinedown_dangerous_myzuka.mp3",
                        },
                        9: {
                              name: "Thick As Thieves",
                              duration: "03:54",
                              src: "Shinedown - Threat To Survival/09_shinedown_thick_as_thieves_myzuka.mp3",
                        },
                        10: {
                              name: "Black Cadillac",
                              duration: "03:27",
                              src: "Shinedown - Threat To Survival/10_shinedown_black_cadillac_myzuka.mp3",
                        },
                        11: {
                           name: "Misfits",
                           duration: "04:05",
                           src: "Shinedown - Threat To Survival/11_shinedown_misfits_myzuka.mp3",
                        },
                        12: {
                           name: "Never Gonna Let Go (Bonus Track)",
                           duration: "04:07",
                           src: "Shinedown - Threat To Survival/12_shinedown_never_gonna_let_go_bonus_track_myzuka.mp3",
                        },
                        13: {
                           name: "Reject (Bonus Track)",
                           duration: "03:30",
                           src: "Shinedown - Threat To Survival/13_shinedown_reject_bonus_track_myzuka.mp3",
                        },
                     }
                  },
         album4 : {
                     title: "The Sound Of Madness",
                     artist: "Shinedown",
                     year: 2008,
                     genre: 'Alternative Rock / Hard Rock',
                     thumb: "thumb4.png",
                     songs: {
                        1: {
                           name: "Devour",
                           duration: "03:50",
                           src: "Shinedown - The Sound Of Madness/01_shinedown_devour_myzuka.mp3",
                        }, 
                        2: {
                              name: "Sound Of Madness",
                              duration: "03:54",
                              src: "Shinedown - The Sound Of Madness/02_shinedown_sound_of_madness_myzuka.mp3",
                        },
                        3: {
                              name: "Second Chance",
                              duration: "03:40",
                              src: "Shinedown - The Sound Of Madness/03_shinedown_second_chance_myzuka.mp3",
                        },
                        4: {
                              name: "Cry For Help",
                              duration: "03:20",
                              src: "Shinedown - The Sound Of Madness/04_shinedown_cry_for_help_myzuka.mp3",
                        },
                        5: {
                              name: "The Crow And The Butterfly",
                              duration: "04:14",
                              src: "Shinedown - The Sound Of Madness/05_shinedown_the_crow_and_the_butterfly_myzuka.mp3",
                        },
                        6: {
                              name: "If You Only Knew",
                              duration: "03:46",
                              src: "Shinedown - The Sound Of Madness/06_shinedown_if_you_only_knew_myzuka.mp3",
                        },
                        7: {
                              name: "Sin With A Grin",
                              duration: "04:01",
                              src: "Shinedown - The Sound Of Madness/07_shinedown_sin_with_a_grin_myzuka.mp3",
                        },
                        8: {
                              name: "What A Shame",
                              duration: "04:19",
                              src: "Shinedown - The Sound Of Madness/08_shinedown_what_a_shame_myzuka.mp3",
                        },
                        9: {
                              name: "Cyanide Sweet Tooth Suicide",
                              duration: "03:11",
                              src: "Shinedown - The Sound Of Madness/09_shinedown_cyanide_sweet_tooth_suicide_myzuka.mp3",
                        },
                        10: {
                              name: "Breaking Inside",
                              duration: "03:51",
                              src: "Shinedown - The Sound Of Madness/10_shinedown_breaking_inside_myzuka.mp3",
                        },
                     }
                  },
         album5 : {
            title: "Immersion",
            artist: "Pendulum",
            year: 2010,
            genre: `Drum'n'Bass / Electronic Rock`,
            thumb: "thumb5.png",
            songs: {
               1: {
                  name: "Genesis",
                  duration: "01:10",
                  src: "Pendulum - Immersion/01_genesis.mp3",
               }, 
               2: {
                     name: "Salt In the Wounds",
                     duration: "06:39",
                     src: "Pendulum - Immersion/02_salt_in_the_wounds.mp3",
               },
               3: {
                     name: "Watercolour",
                     duration: "05:04",
                     src: "Pendulum - Immersion/03_watercolour.mp3",
               },
               4: {
                     name: "Set Me On Fire",
                     duration: "05:03",
                     src: "Pendulum - Immersion/04_set_me_on_fire.mp3",
               },
               5: {
                     name: "Crush",
                     duration: "04:14",
                     src: "Pendulum - Immersion/05_crush.mp3",
               },
               6: {
                     name: "Under the Waves",
                     duration: "04:55",
                     src: "Pendulum - Immersion/06_under_the_waves.mp3",
               },
               7: {
                     name: "Immunize (Feat. Liam Howlett)",
                     duration: "04:37",
                     src: "Pendulum - Immersion/07_immunize_feat_liam_howlett_.mp3",
               },
               8: {
                     name: "The Island, Pt. I (Dawn)",
                     duration: "05:20",
                     src: "Pendulum - Immersion/08_the_island_pt_i_dawn_.mp3",
               },
               9: {
                     name: "The Island, Pt. II (Dusk)",
                     duration: "04:10",
                     src: "Pendulum - Immersion/09_the_island_pt_ii_dusk_.mp3",
               },
               10: {
                     name: "Comprachicos",
                     duration: "02:49",
                     src: "Pendulum - Immersion/10_comprachicos.mp3",
               },
               11: {
                  name: "The Vulture",
                  duration: "04:03",
                  src: "Pendulum - Immersion/11_the_vulture.mp3",
               },
               12: {
                     name: "Witchcraft",
                     duration: "04:13",
                     src: "Pendulum - Immersion/12_witchcraft.mp3",
               },
               13: {
                     name: "Self Vs Self (Feat. In Flames)",
                     duration: "04:46",
                     src: "Pendulum - Immersion/13_self_vs_self_feat_in_flames_.mp3",
               },
            }
         },
         album6 : {
            title: "Hybrid Theory",
            artist: "Linkin Park",
            year: 2000,
            genre: `Alternative / Nu-Metal / Rapcore`,
            thumb: "thumb6.png",
            songs: {
               1: {
                  name: "Papercut",
                  duration: "03:05",
                  src: "Linkin Park - Hybrid Theory/01_linkin_park_papercut_myzuka.mp3",
               }, 
               2: {
                     name: "One Step Closer",
                     duration: "02:36",
                     src: "Linkin Park - Hybrid Theory/02_linkin_park_one_step_closer_myzuka.mp3",
               },
               3: {
                     name: "With You",
                     duration: "03:23",
                     src: "Linkin Park - Hybrid Theory/03_linkin_park_with_you_myzuka.mp3",
               },
               4: {
                     name: "Points Of Authority",
                     duration: "03:20",
                     src: "Linkin Park - Hybrid Theory/04_linkin_park_points_of_authority_myzuka.mp3",
               },
               5: {
                     name: "Crawling",
                     duration: "03:29",
                     src: "Linkin Park - Hybrid Theory/05_linkin_park_crawling_myzuka.mp3",
               },
               6: {
                     name: "Runaway",
                     duration: "03:04",
                     src: "Linkin Park - Hybrid Theory/06_linkin_park_runaway_myzuka.mp3",
               },
               7: {
                     name: "By Myself",
                     duration: "03:10",
                     src: "Linkin Park - Hybrid Theory/07_linkin_park_by_myself_myzuka.mp3",
               },
               8: {
                     name: "In The End",
                     duration: "03:36",
                     src: "Linkin Park - Hybrid Theory/08_linkin_park_in_the_end_myzuka.mp3",
               },
               9: {
                     name: "A Place For My Head",
                     duration: "03:05",
                     src: "Linkin Park - Hybrid Theory/09_linkin_park_a_place_for_my_head_myzuka.mp3",
               },
               10: {
                     name: "Forgotten",
                     duration: "03:15",
                     src: "Linkin Park - Hybrid Theory/10_linkin_park_forgotten_myzuka.mp3",
               },
               11: {
                  name: "Cure For The Itch",
                  duration: "02:37",
                  src: "Linkin Park - Hybrid Theory/11_linkin_park_cure_for_the_itch_myzuka.mp3",
               },
               12: {
                     name: "Pushing Me Away",
                     duration: "03:12",
                     src: "Linkin Park - Hybrid Theory/12_linkin_park_pushing_me_away_myzuka.mp3",
               },
               13: {
                     name: "My December",
                     duration: "04:21",
                     src: "Linkin Park - Hybrid Theory/13_linkin_park_my_december_myzuka.mp3",
               },
            }
         },
         album7 : {
            title: "Minutes To Midnight",
            artist: "Linkin Park",
            year: 2007,
            genre: "Alternative Rock / Alternative / Rap-Rock",
            thumb: "thumb7.png",
            songs: {
               1: {
                  name: "Wake",
                  duration: "01:40",
                  src: "Linkin Park - Minutes To Midnight/01_linkin_park_wake_myzuka.mp3",
               }, 
               2: {
                     name: "Given Up",
                     duration: "03:09",
                     src: "Linkin Park - Minutes To Midnight/02_linkin_park_given_up_myzuka.mp3",
               },
               3: {
                     name: "Leave Out All The Rest",
                     duration: "03:29",
                     src: "Linkin Park - Minutes To Midnight/03_linkin_park_leave_out_all_the_rest_myzuka.mp3",
               },
               4: {
                     name: "Bleed It Out",
                     duration: "02:44",
                     src: "Linkin Park - Minutes To Midnight/04_linkin_park_bleed_it_out_myzuka.mp3",
               },
               5: {
                     name: "Shadow Of The Day",
                     duration: "04:49",
                     src: "Linkin Park - Minutes To Midnight/05_linkin_park_shadow_of_the_day_myzuka.mp3",
               },
               6: {
                     name: "What I've Done",
                     duration: "03:25",
                     src: "Linkin Park - Minutes To Midnight/06_linkin_park_what_ive_done_myzuka.mp3",
               },
               7: {
                     name: "Hands Held High",
                     duration: "03:53",
                     src: "Linkin Park - Minutes To Midnight/07_linkin_park_hands_held_high_myzuka.mp3",
               },
               8: {
                     name: "No More Sorrow",
                     duration: "03:41",
                     src: "Linkin Park - Minutes To Midnight/08_linkin_park_no_more_sorrow_myzuka.mp3",
               },
               9: {
                     name: "Valentine's Day",
                     duration: "03:16",
                     src: "Linkin Park - Minutes To Midnight/09_linkin_park_valentines_day_myzuka.mp3",
               },
               10: {
                     name: "In Between",
                     duration: "03:16",
                     src: "Linkin Park - Minutes To Midnight/10_linkin_park_in_between_myzuka.mp3",
               },
               11: {
                  name: "In Pieces",
                  duration: "03:38",
                  src: "Linkin Park - Minutes To Midnight/11_linkin_park_in_pieces_myzuka.mp3",
               },
               12: {
                     name: "The Little Things Give You Away",
                     duration: "06:21",
                     src: "Linkin Park - Minutes To Midnight/12_linkin_park_the_little_things_give_you_away_myzuka.mp3",
               },
            }
         },
         album8 : {
            title: "Dead Letters",
            artist: "The Rasmus",
            year: 2003,
            genre: "Alternative Rock",
            thumb: "thumb8.png",
            songs: {
               1: {
                  name: "First Day Of My Life",
                  duration: "03:46",
                  src: "The Rasmus - Dead Letters/01 - First Day Of My Life.mp3",
               }, 
               2: {
                     name: "In The Shadows",
                     duration: "04:11",
                     src: "The Rasmus - Dead Letters/02 - In The Shadows.mp3",
               },
               3: {
                     name: "Still Standing",
                     duration: "03:32",
                     src: "The Rasmus - Dead Letters/03 - Still Standing.mp3",
               },
               4: {
                     name: "In My Life",
                     duration: "04:03",
                     src: "The Rasmus - Dead Letters/04 - In My Life.mp3",
               },
               5: {
                     name: "Time To Burn",
                     duration: "04:34",
                     src: "The Rasmus - Dead Letters/05 - Time To Burn.mp3",
               },
               6: {
                     name: "Guilty",
                     duration: "03:43",
                     src: "The Rasmus - Dead Letters/06 - Guilty.mp3",
               },
               7: {
                     name: "Not Like The Other Girls",
                     duration: "05:46",
                     src: "The Rasmus - Dead Letters/07 - Not Like The Other Girls.mp3",
               },
               8: {
                     name: "The One I Love",
                     duration: "03:18",
                     src: "The Rasmus - Dead Letters/08 - The One I Love.mp3",
               },
               9: {
                     name: "Back In The Picture",
                     duration: "03:45",
                     src: "The Rasmus - Dead Letters/09 - Back In The Picture.mp3",
               },
               10: {
                     name: "Funeral Song",
                     duration: "03:50",
                     src: "The Rasmus - Dead Letters/10 - Funeral Song.mp3",
               },
            }
         },
         album9 : {
            title: "Perfection Is A Lie",
            artist: "The Hardkiss",
            year: 2017,
            genre: "Electronic / Alternative Rock",
            thumb: "thumb9.png",
            songs: {
               1: {
                  name: "Organ",
                  duration: "03:19",
                  src: "The Hardkiss - Perfection Is A Lie/01_the_hardkiss_organ_myzuka.mp3",
               }, 
               2: {
                     name: "Tony, Talk!",
                     duration: "03:35",
                     src: "The Hardkiss - Perfection Is A Lie/02_the_hardkiss_tony_talk_myzuka.mp3",
               },
               3: {
                     name: "Doctor Thomases",
                     duration: "04:07",
                     src: "The Hardkiss - Perfection Is A Lie/03_the_hardkiss_doctor_thomases_myzuka.mp3",
               },
               4: {
                     name: "Rain",
                     duration: "03:27",
                     src: "The Hardkiss - Perfection Is A Lie/04_the_hardkiss_rain_myzuka.mp3",
               },
               5: {
                     name: "Helpless",
                     duration: "03:37",
                     src: "The Hardkiss - Perfection Is A Lie/05_the_hardkiss_helpless_myzuka.mp3",
               },
               6: {
                     name: "Антарктида",
                     duration: "03:59",
                     src: "The Hardkiss - Perfection Is A Lie/06_the_hardkiss_antarktida_myzuka.mp3",
               },
               7: {
                     name: "A2",
                     duration: "00:39",
                     src: "The Hardkiss - Perfection Is A Lie/07_the_hardkiss_a2_myzuka.mp3",
               },
               8: {
                     name: "Perfection",
                     duration: "03:56",
                     src: "The Hardkiss - Perfection Is A Lie/08_the_hardkiss_perfection_myzuka.mp3",
               },
               9: {
                     name: "Closer",
                     duration: "04:00",
                     src: "The Hardkiss - Perfection Is A Lie/09_the_hardkiss_closer_myzuka.mp3",
               },
               10: {
                     name: "Pibip",
                     duration: "04:15",
                     src: "The Hardkiss - Perfection Is A Lie/10_the_hardkiss_pibip_myzuka.mp3",
               },
               11: {
                     name: "Hammer",
                     duration: "04:07",
                     src: "The Hardkiss - Perfection Is A Lie/11_the_hardkiss_hammer_myzuka.mp3",
               },
               12: {
                     name: "Altair",
                     duration: "04:08",
                     src: "The Hardkiss - Perfection Is A Lie/12_the_hardkiss_altair_myzuka.mp3",
               },
            }
         },
         album10 : {
            title: "One-X",
            artist: "Three Days Grace",
            year: 2009,
            genre: "Alternative Rock",
            thumb: "thumb10.png",
            songs: {
               1: {
                  name: "It's All Over",
                  duration: "04:09",
                  src: "Three Days Grace - One-X/01 Its All Over.mp3",
               }, 
               2: {
                     name: "Pain",
                     duration: "03:23",
                     src: "Three Days Grace - One-X/02 Pain.mp3",
               },
               3: {
                     name: "Animal I Have Become",
                     duration: "03:51",
                     src: "Three Days Grace - One-X/03 Animal I Have Become.mp3",
               },
               4: {
                     name: "Never Too Late",
                     duration: "03:29",
                     src: "Three Days Grace - One-X/04 Never Too Late.mp3",
               },
               5: {
                     name: "On My Own",
                     duration: "03:05",
                     src: "Three Days Grace - One-X/05 On My Own.mp3",
               },
               6: {
                     name: "Riot",
                     duration: "03:27",
                     src: "Three Days Grace - One-X/06 Riot.mp3",
               },
               7: {
                     name: "Get Out Alive",
                     duration: "04:22",
                     src: "Three Days Grace - One-X/07 Get Out Alive.mp3",
               },
               8: {
                     name: "Let It Die",
                     duration: "03:09",
                     src: "Three Days Grace - One-X/08 Let It Die.mp3",
               },
               9: {
                     name: "Over And Over",
                     duration: "03:11",
                     src: "Three Days Grace - One-X/09 Over & Over.mp3",
               },
               10: {
                     name: "Time Of Dying",
                     duration: "03:06",
                     src: "Three Days Grace - One-X/10 Time Of Dying.mp3",
               },
               11: {
                     name: "Gone Forever",
                     duration: "03:41",
                     src: "Three Days Grace - One-X/11 Gone Forever.mp3",
               },
               12: {
                     name: "One X",
                     duration: "04:46",
                     src: "Three Days Grace - One-X/12 One X.mp3",
               },
            }
         },
         album11 : {
            title: "Jealous Gods",
            artist: "Poets Of The Fall",
            year: 2014,
            genre: "Alternative Rock",
            thumb: "thumb11.png",
            songs: {
               1: {
                  name: "Daze",
                  duration: "05:25",
                  src: "Poets Of The Fall - Jealous Gods/01_poets_of_the_fall_daze_myzuka.mp3",
               }, 
               2: {
                     name: "Jealous Gods",
                     duration: "04:34",
                     src: "Poets Of The Fall - Jealous Gods/02_poets_of_the_fall_jealous_gods_myzuka.mp3",
               },
               3: {
                     name: "Rumors",
                     duration: "04:56",
                     src: "Poets Of The Fall - Jealous Gods/03_poets_of_the_fall_rumors_myzuka.mp3",
               },
               4: {
                     name: "Brighter Than The Sun",
                     duration: "04:14",
                     src: "Poets Of The Fall - Jealous Gods/04_poets_of_the_fall_brighter_than_the_sun_myzuka.mp3",
               },
               5: {
                     name: "Love Will Come To You",
                     duration: "04:13",
                     src: "Poets Of The Fall - Jealous Gods/05_poets_of_the_fall_love_will_come_to_you_myzuka.mp3",
               },
               6: {
                     name: "Rogue",
                     duration: "04:23",
                     src: "Poets Of The Fall - Jealous Gods/06_poets_of_the_fall_rogue_myzuka.mp3",
               },
               7: {
                     name: "Rebirth",
                     duration: "04:15",
                     src: "Poets Of The Fall - Jealous Gods/07_poets_of_the_fall_rebirth_myzuka.mp3",
               },
               8: {
                     name: "Hounds To Hamartia",
                     duration: "05:03",
                     src: "Poets Of The Fall - Jealous Gods/08_poets_of_the_fall_hounds_to_hamartia_myzuka.mp3",
               },
               9: {
                     name: "Clear Blue Sky",
                     duration: "03:24",
                     src: "Poets Of The Fall - Jealous Gods/09_poets_of_the_fall_clear_blue_sky_myzuka.mp3",
               },
               10: {
                     name: "Choice Millionaire",
                     duration: "04:45",
                     src: "Poets Of The Fall - Jealous Gods/10_poets_of_the_fall_choice_millionaire_myzuka.mp3",
               },
               11: {
                     name: "Nothing Stays The Same",
                     duration: "04:30",
                     src: "Poets Of The Fall - Jealous Gods/11_poets_of_the_fall_nothing_stays_the_same_myzuka.mp3",
               },
            }
         },
         album12 : {
            title: "Ultraviolet",
            artist: "Poets Of The Fall",
            year: 2018,
            genre: "Alternative Rock",
            thumb: "thumb12.png",
            songs: {
               1: {
                  name: "Dancing On Broken Glass",
                  duration: "03:55",
                  src: "Poets Of The Fall - Ultraviolet/01_poets_of_the_fall_dancing_on_broken_glass_myzuka.mp3",
               }, 
               2: {
                     name: "My Dark Disquiet",
                     duration: "05:10",
                     src: "Poets Of The Fall - Ultraviolet/02_poets_of_the_fall_my_dark_disquiet_myzuka.mp3",
               },
               3: {
                     name: "False Kings",
                     duration: "03:32",
                     src: "Poets Of The Fall - Ultraviolet/03_poets_of_the_fall_false_kings_myzuka.mp3",
               },
               4: {
                     name: "Fool's Paradise",
                     duration: "04:34",
                     src: "Poets Of The Fall - Ultraviolet/04_poets_of_the_fall_fools_paradise_myzuka.mp3",
               },
               5: {
                     name: "Standstill",
                     duration: "03:47",
                     src: "Poets Of The Fall - Ultraviolet/05_poets_of_the_fall_standstill_myzuka.mp3",
               },
               6: {
                     name: "The Sweet Escape",
                     duration: "05:30",
                     src: "Poets Of The Fall - Ultraviolet/06_poets_of_the_fall_the_sweet_escape_myzuka.mp3",
               },
               7: {
                     name: "Moments Before The Storm",
                     duration: "04:27",
                     src: "Poets Of The Fall - Ultraviolet/07_poets_of_the_fall_moments_before_the_storm_myzuka.mp3",
               },
               8: {
                     name: "In A Perfect World",
                     duration: "04:46",
                     src: "Poets Of The Fall - Ultraviolet/08_poets_of_the_fall_in_a_perfect_world_myzuka.mp3",
               },
               9: {
                     name: "Angel",
                     duration: "04:22",
                     src: "Poets Of The Fall - Ultraviolet/09_poets_of_the_fall_angel_myzuka.mp3",
               },
               10: {
                     name: "Choir Of Cicadas",
                     duration: "05:04",
                     src: "Poets Of The Fall - Ultraviolet/10_poets_of_the_fall_choir_of_cicadas_myzuka.mp3",
               },
            }
         },
};
 















// переменные
const downloadUrl = document.querySelector('.url');
const mainAudio = document.querySelector('#main-audio');
const playPauseButtons = document.querySelectorAll('.play-pause-button');
let playingAlbumThumb = document.querySelector('.playing-album__thumb-img');
let playingAlbumTitle = document.querySelector('.playing-album__title');
let playingAlbumArtist = document.querySelector('.playing-album__artist');
let playingAlbumGenre = document.querySelector('.playing-album__genre');
let timePassed = document.querySelector('.time__passed');
let timeAll = document.querySelector('.time__all');
let progressBarPlayed = document.querySelector('.progress__played');
let searchInput = document.getElementById('search-input');
let collection = document.querySelector('.song-list').children; // живая коллекция песен, добавленных динамически



// ===========  Firebase  ===========

let storage = firebase.storage();
// создаем ссылку на Firebase Storage
let storageRef = firebase.storage().ref();

function getUrl(link) {
   // создаем ссылку на нужный файл
   let songUrlRef = storageRef.child(link);
   // Get the download URL
   songUrlRef.getDownloadURL()
   .then((url) => {
   playAudio(url);
   })
   .catch((error) => {
      alert(error.message); 
   });
}

// ===========  Firebase end ===========



// ловим клик на динамически добавленных кнопках play-pause-button
document.addEventListener('click', function(e) {
   if (e.target.classList.contains('play-pause-button')) {
      if (e.target.parentNode.parentNode.classList.contains('playing')) {
         pauseSong(e.target);
      } else {
         playSong(e.target);
      }
   }
})


// playPauseButtons.forEach(playPauseButton => {
//    playPauseButton.addEventListener('click', playPauseSong);
// })

// кликом по альбому загружаем список песен
let albums = document.querySelectorAll('.album');
albums.forEach(item => {
   item.addEventListener('click', loadSongs);
})





function loadSongs() {
   // показать инфо о текущем альбоме
   showCurrentAlbum();

   const songList = document.querySelector('.song-list');
   let albumId = this.getAttribute('data-albumId');
   
   songList.innerHTML = '';
   songList.classList.remove('hidden');

   // for (let item in albumsObj) {
   let album = albumsObj[albumId];
   let albumSongs = album.songs;
   const songArtist = album.artist;
   const albumTitle = album.title;
   const songThumb = album.thumb;

   // инфо о текущем альбоме
   playingAlbumThumb.src = `img/thumbs/${songThumb}`;
   playingAlbumTitle.innerHTML = album.title;
   playingAlbumArtist.innerHTML = songArtist;
   playingAlbumGenre.innerHTML = album.genre;

   for (let song in albumSongs) {
      const songNumber = song;
      const songTitle = albumSongs[song].name; 
      const songTime = albumSongs[song].duration;

      // добавляем data-aтрибут с src к каждой песне
      let songSrc = albumSongs[song].src;
      
      let songTemplate = `
         <div class="song-list__item song paused">
            <div class="playing-condition paused">
               <div class="song__number">${songNumber}</div>
               <div class="play-pause-button">
               </div>
               <div class="playing-anim">
                  <div class="playing-anim__item"></div>
                  <div class="playing-anim__item"></div>
                  <div class="playing-anim__item"></div>
                  <div class="playing-anim__item"></div>
               </div>
            </div>
            <span class="song__name" data-songSrc="${songSrc}">${songTitle}</span>
            <span class="song__artist">${songArtist}</span>
            <span class="song__time">${songTime}</span>
         </div>
      `;

      songList.insertAdjacentHTML('beforeend', songTemplate);
   } 
}


// показать инфо о текущем альбоме
function showCurrentAlbum() {
   const playingAlbum = document.querySelector('.playing-album');
   const visual = document.querySelector('.visual');
   playingAlbum.classList.remove('hidden');
   visual.classList.remove('hidden');
}

// включить песню
function playSong(elem) {
   for (let i = 0; i < collection.length; i++) {
      if (collection[i].classList.contains('playing'))
      collection[i].classList.add('paused');
      collection[i].classList.remove('playing');
      collection[i].firstElementChild.classList.add('paused');
      collection[i].firstElementChild.classList.remove('playing');
   }

   elem.parentNode.classList.remove('paused');
   elem.parentNode.parentNode.classList.remove('paused');
   elem.parentNode.classList.add('playing');
   elem.parentNode.parentNode.classList.add('playing');

   let songSrc = elem.parentNode.nextElementSibling.getAttribute('data-songSrc');
   getUrl(songSrc);
}


// выключить песню
function pauseSong(elem) {
   elem.parentNode.classList.remove('playing');
   elem.parentNode.parentNode.classList.remove('playing');
   elem.parentNode.classList.add('paused');
   elem.parentNode.parentNode.classList.add('paused');
   mainAudio.pause();
}

// играть аудио
function playAudio(url) {
   mainAudio.src = url;
   mainAudio.play();
}

let items = document.querySelectorAll('.song-list__item');
// console.log(items);

// текущая песня
mainAudio.addEventListener("timeupdate", (e) => {

   // изменяем прогрессбар
   const currentTime = e.target.currentTime;
   const duration = e.target.duration;
   let progressWidth = (currentTime / duration) * 100;
   progressBarPlayed.style.width = `${progressWidth}%`;

   mainAudio.addEventListener("loadeddata", () => {
      // изменяем общую продолжительность песни
      let audioDuration = mainAudio.duration;
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);
      if (totalSec < 10) {
         totalSec = `0${totalSec}`;
      }
      timeAll.innerHTML = `${totalMin}:${totalSec}`;
   })

   // изменяем текущее время проигрывания песни
   let currentMin = Math.floor(currentTime / 60);
   let currentSec = Math.floor(currentTime % 60);
   if (currentSec < 10) {
      currentSec = `0${currentSec}`;
   }
   timePassed.innerHTML = `${currentMin}:${currentSec}`;
})



// фильтр альбомов по названию
searchInput.addEventListener('keydown', function(event) {
   if (event.code == 'Enter' || event.code == 'NumpadEnter') {
      const albums = document.querySelectorAll('.album');
      let searchValue = searchInput.value.toLowerCase();

      albums.forEach(album => {
         if (album.classList.contains('hide')) {
            album.classList.remove('hide');
         }

         let dataAlbumName = album.getAttribute('data-albumName');
         
         if (dataAlbumName.slice(0, searchValue.length) !== searchValue) {
            album.classList.add('hide');
         }
      })
   }
})



