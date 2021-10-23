// Wf

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_WALL_MISC
} from "../../../include/surface_terrains"

// 0x0700F868 - 0x0700F934
export const wf_seg7_collision_small_bomp = [
    COL_INIT(),
    COL_VERTEX_INIT(0xE),
    COL_VERTEX(259, 5, -128),
    COL_VERTEX(195, 210, -128),
    COL_VERTEX(259, 210, -96),
    COL_VERTEX(259, 210, 95),
    COL_VERTEX(259, 5, 127),
    COL_VERTEX(-252, 210, -128),
    COL_VERTEX(-252, 5, -128),
    COL_VERTEX(136, 261, -77),
    COL_VERTEX(195, 210, 127),
    COL_VERTEX(136, 261, 75),
    COL_VERTEX(-252, 5, 127),
    COL_VERTEX(-252, 261, 75),
    COL_VERTEX(-252, 261, -77),
    COL_VERTEX(-252, 210, 127),
    COL_TRI_INIT(SURFACE_WALL_MISC, 18),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 4),
    COL_TRI(0, 2, 3),
    COL_TRI(5, 1, 0),
    COL_TRI(5, 0, 6),
    COL_TRI(1, 7, 2),
    COL_TRI(7, 3, 2),
    COL_TRI(3, 8, 4),
    COL_TRI(3, 9, 8),
    COL_TRI(7, 9, 3),
    COL_TRI(10, 4, 8),
    COL_TRI(11, 7, 12),
    COL_TRI(11, 9, 7),
    COL_TRI(12, 7, 1),
    COL_TRI(8, 9, 11),
    COL_TRI(12, 1, 5),
    COL_TRI(13, 8, 11),
    COL_TRI(10, 8, 13),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
