// Ssl

import {
    MACRO_OBJECT, MACRO_OBJECT_WITH_BEH_PARAM, MACRO_OBJECT_END
} from "../../../../game/MacroSpecialObjects"
import {
    DIALOG_016, DIALOG_032, DIALOG_157
} from "../../../../text/us/dialogs"


// 0x07012424 - 0x070125F2
export const ssl_seg7_area_1_macro_objs = [
    MACRO_OBJECT(/*preset*/ 'macro_goomba',                    /*yaw*/   0, /*pos*/  6068,    51,  2800),
    MACRO_OBJECT(/*preset*/ 'macro_goomba',                    /*yaw*/   0, /*pos*/  5535,    51,  3377),
    MACRO_OBJECT(/*preset*/ 'macro_goomba',                    /*yaw*/   0, /*pos*/  5980,    51,  3911),
    MACRO_OBJECT(/*preset*/ 'macro_pokey',                     /*yaw*/   0, /*pos*/  4602,    40,  4622),
    MACRO_OBJECT(/*preset*/ 'macro_pokey',                     /*yaw*/   0, /*pos*/  5057,   143,   256),
    MACRO_OBJECT(/*preset*/ 'macro_pokey',                     /*yaw*/   0, /*pos*/ -6858,     8, -3711),
    MACRO_OBJECT(/*preset*/ 'macro_pokey',                     /*yaw*/   0, /*pos*/ -5372,    64,  3083),
    MACRO_OBJECT(/*preset*/ 'macro_breakable_box_no_coins',    /*yaw*/   0, /*pos*/  5900,    51,  4400),
    MACRO_OBJECT(/*preset*/ 'macro_breakable_box_no_coins',    /*yaw*/   0, /*pos*/  5900,    51,  2311),
    MACRO_OBJECT(/*preset*/ 'macro_bobomb_buddy_opens_cannon', /*yaw*/   0, /*pos*/ -5990,     0, -3871),
    MACRO_OBJECT(/*preset*/ 'macro_yellow_coin',               /*yaw*/   0, /*pos*/ -5869,  1200, -2535),
    MACRO_OBJECT(/*preset*/ 'macro_yellow_coin',               /*yaw*/   0, /*pos*/ -5896,  1200,   773),
    MACRO_OBJECT(/*preset*/ 'macro_yellow_coin',               /*yaw*/   0, /*pos*/  1800,  1200,   800),
    MACRO_OBJECT(/*preset*/ 'macro_yellow_coin',               /*yaw*/   0, /*pos*/  1805,  1200, -2536),
    MACRO_OBJECT(/*preset*/ 'macro_box_wing_cap',              /*yaw*/   0, /*pos*/  6900,   350, -5400),
    MACRO_OBJECT(/*preset*/ 'macro_box_wing_cap',              /*yaw*/   0, /*pos*/ -3000,   500,   800),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_cannon_closed',             /*yaw*/   0, /*pos*/  6863,     0, -6860, /*behParam*/ 0xC0),
    MACRO_OBJECT(/*preset*/ 'macro_breakable_box_small',       /*yaw*/   0, /*pos*/  5900,    50,  3440),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/ -4500,  1500, -3500),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/ -4500,  1500,  1500),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/   500,  1500, -3500),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/   500,  1500,  1500),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/  3380,    10, -4900),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/ -5270,  -170, -6780),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/ -7450,    10,  7560),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',                  /*yaw*/   0, /*pos*/  5900,    70,  2311),
    MACRO_OBJECT(/*preset*/ 'macro_box_koopa_shell',           /*yaw*/   0, /*pos*/  5840,   940,  2500),
    MACRO_OBJECT(/*preset*/ 'macro_box_wing_cap',              /*yaw*/   0, /*pos*/  5860,   940,  4180),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',           /*yaw*/   0, /*pos*/  5702,   614,  2974, /*behParam*/ DIALOG_016),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',           /*yaw*/   0, /*pos*/ -3260,   256,   800, /*behParam*/ DIALOG_032),
    MACRO_OBJECT(/*preset*/ 'macro_hidden_1up_in_pole',        /*yaw*/   0, /*pos*/ -6000,   600, -4800),
    MACRO_OBJECT(/*preset*/ 'macro_1up',                       /*yaw*/   0, /*pos*/  -250,     0,  4200),
    MACRO_OBJECT(/*preset*/ 'macro_fly_guy',                   /*yaw*/   0, /*pos*/  3500,   149,  5600),
    MACRO_OBJECT(/*preset*/ 'macro_bobomb',                    /*yaw*/   0, /*pos*/  3800,     0,  6000),
    MACRO_OBJECT(/*preset*/ 'macro_bobomb',                    /*yaw*/   0, /*pos*/  1750,     0,  6450),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal',      /*yaw*/   0, /*pos*/ -5920,   200,  -920),
    MACRO_OBJECT(/*preset*/ 'macro_fire_spitter',              /*yaw*/   0, /*pos*/  -386,   512, -2228),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal',      /*yaw*/  90, /*pos*/ -2290,   787, -2180),
    MACRO_OBJECT(/*preset*/ 'macro_fire_fly_guy',              /*yaw*/   0, /*pos*/  1440,   800,  -960),
    MACRO_OBJECT(/*preset*/ 'macro_fire_fly_guy',              /*yaw*/   0, /*pos*/ -3400,  1160, -1120),
    MACRO_OBJECT(/*preset*/ 'macro_fire_spitter',              /*yaw*/   0, /*pos*/ -5125,   135, -3138),
    //MACRO_OBJECT(/*preset*/ 'macro_jumping_box',               /*yaw*/   0, /*pos*/  1120,     0,  6480),
    MACRO_OBJECT(/*preset*/ 'macro_1up',                       /*yaw*/   0, /*pos*/  5757,   230,  5761),
    //MACRO_OBJECT(/*preset*/ 'macro_jumping_box',               /*yaw*/   0, /*pos*/ -5200,     0,  1700),
    MACRO_OBJECT(/*preset*/ 'macro_box_1up_running_away',      /*yaw*/   0, /*pos*/ -1200,   500,   800),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',           /*yaw*/   0, /*pos*/  5130,    26,  -370, /*behParam*/ DIALOG_157),
    MACRO_OBJECT_END(),
];

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
