// Wdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x070186B4 - 0x07018726
export const wdw_seg7_collision_070186B4 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x7),
    COL_VERTEX(0, 0, 0),
    COL_VERTEX(0, 128, -255),
    COL_VERTEX(222, 128, -127),
    COL_VERTEX(-221, 128, -127),
    COL_VERTEX(-221, 128, 128),
    COL_VERTEX(0, 128, 256),
    COL_VERTEX(222, 128, 128),
    COL_TRI_INIT(SURFACE_DEFAULT, 10),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 4),
    COL_TRI(1, 4, 5),
    COL_TRI(1, 5, 6),
    COL_TRI(1, 6, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(0, 4, 3),
    COL_TRI(0, 5, 4),
    COL_TRI(0, 6, 5),
    COL_TRI(0, 2, 6),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
