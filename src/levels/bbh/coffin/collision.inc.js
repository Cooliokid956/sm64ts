// Bbh

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07026D18 - 0x07026DE4
export const bbh_seg7_collision_coffin = [
    COL_INIT(),
    COL_VERTEX_INIT(0xC),
    COL_VERTEX(-57, 77, 0),
    COL_VERTEX(115, 77, -306),
    COL_VERTEX(-114, 77, -306),
    COL_VERTEX(-57, 3, 0),
    COL_VERTEX(58, 3, 0),
    COL_VERTEX(58, 77, 0),
    COL_VERTEX(115, 3, -306),
    COL_VERTEX(-57, 77, -457),
    COL_VERTEX(58, 77, -457),
    COL_VERTEX(58, 3, -457),
    COL_VERTEX(-57, 3, -457),
    COL_VERTEX(-114, 3, -306),
    COL_TRI_INIT(SURFACE_DEFAULT, 20),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 0, 2),
    COL_TRI(4, 5, 0),
    COL_TRI(0, 5, 1),
    COL_TRI(4, 0, 3),
    COL_TRI(6, 5, 4),
    COL_TRI(6, 1, 5),
    COL_TRI(1, 7, 2),
    COL_TRI(1, 8, 7),
    COL_TRI(9, 1, 6),
    COL_TRI(9, 8, 1),
    COL_TRI(10, 8, 9),
    COL_TRI(10, 7, 8),
    COL_TRI(11, 2, 7),
    COL_TRI(11, 7, 10),
    COL_TRI(3, 2, 11),
    COL_TRI(6, 4, 3),
    COL_TRI(6, 3, 11),
    COL_TRI(10, 6, 11),
    COL_TRI(10, 9, 6),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
