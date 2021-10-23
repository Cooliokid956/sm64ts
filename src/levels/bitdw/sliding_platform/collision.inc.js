// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700F688 - 0x0700F70C
export const bitdw_seg7_collision_0700F688 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-409, 205, 205),
    COL_VERTEX(-409, 205, -204),
    COL_VERTEX(-409, 0, -204),
    COL_VERTEX(-409, 0, 205),
    COL_VERTEX(973, 0, 205),
    COL_VERTEX(973, 0, -204),
    COL_VERTEX(973, 205, 205),
    COL_VERTEX(973, 205, -204),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(2, 4, 3),
    COL_TRI(2, 5, 4),
    COL_TRI(1, 5, 2),
    COL_TRI(6, 3, 4),
    COL_TRI(7, 6, 4),
    COL_TRI(7, 4, 5),
    COL_TRI(7, 0, 6),
    COL_TRI(7, 1, 0),
    COL_TRI(1, 7, 5),
    COL_TRI(6, 0, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
