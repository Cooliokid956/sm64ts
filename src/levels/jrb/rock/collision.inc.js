// Jrb

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700C758 - 0x0700C824
export const jrb_seg7_collision_rock_solid = [
    COL_INIT(),
    COL_VERTEX_INIT(0xC),
    COL_VERTEX(305, -409, 0),
    COL_VERTEX(216, -808, -53),
    COL_VERTEX(32, -409, -338),
    COL_VERTEX(32, -409, 264),
    COL_VERTEX(28, -675, 134),
    COL_VERTEX(-66, -822, -143),
    COL_VERTEX(8, -822, -218),
    COL_VERTEX(-108, -9, -53),
    COL_VERTEX(28, -142, -182),
    COL_VERTEX(-306, -409, 0),
    COL_VERTEX(84, 29, 7),
    COL_VERTEX(8, 29, 82),
    COL_TRI_INIT(SURFACE_DEFAULT, 20),
    COL_TRI(7, 11, 10),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 4),
    COL_TRI(1, 0, 4),
    COL_TRI(5, 1, 4),
    COL_TRI(5, 6, 1),
    COL_TRI(2, 1, 6),
    COL_TRI(7, 8, 2),
    COL_TRI(2, 9, 7),
    COL_TRI(5, 2, 6),
    COL_TRI(5, 9, 2),
    COL_TRI(4, 9, 5),
    COL_TRI(4, 3, 9),
    COL_TRI(8, 7, 10),
    COL_TRI(7, 9, 11),
    COL_TRI(0, 2, 8),
    COL_TRI(11, 3, 10),
    COL_TRI(9, 3, 11),
    COL_TRI(3, 0, 10),
    COL_TRI(10, 0, 8),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
