// 0x07009430 - 0x07009530

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsSP1Triangle, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    sky_09007000, sky_09000800, sky_09004800, sky_09001800
} from "../../../../../textures/sky"

import { bitdw_seg7_texture_07001000 } from "../../../texture.inc"

const bitdw_seg7_vertex_07009430 = [
    [[   307,    955,    307], 0, [ -4538,  -2496], [0x3b, 0x41, 0x42, 0xff]],
    [[   922,   1024,   -204], 0, [ -4644,  -4306], [0x3b, 0x41, 0x42, 0xff]],
    [[   922,   1024,    205], 0, [ -5326,  -3624], [0x3b, 0x41, 0x42, 0xff]],
    [[   307,    955,   -306], 0, [ -3516,  -3518], [0x3b, 0x41, 0x42, 0xff]],
    [[ -1740,   -818,    307], 0, [     0,   2010], [0x3b, 0x41, 0x42, 0xff]],
    [[ -1740,   -818,   -306], 0, [   990,    990], [0x3b, 0x41, 0x42, 0xff]],
    [[   307,    955,   -306], 0, [  6326,   1442], [0x7c, 0x89, 0x79, 0xff]],
    [[   102,   1229,   -306], 0, [  6612,    478], [0x7c, 0x89, 0x79, 0xff]],
    [[   717,   1229,   -306], 0, [  7632,   1498], [0x7c, 0x89, 0x79, 0xff]],
    [[   922,   1024,    205], 0, [  7632,   2180], [0x7c, 0x89, 0x79, 0xff]],
    [[   717,   1229,    307], 0, [  7632,   1498], [0x7c, 0x89, 0x79, 0xff]],
    [[   307,    955,    307], 0, [  6326,   1442], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1740,   -818,    307], 0, [     0,    990], [0x7c, 0x89, 0x79, 0xff]],
    [[   102,   1229,    307], 0, [  6610,    478], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1740,   -818,   -306], 0, [     0,    990], [0x7c, 0x89, 0x79, 0xff]],
    [[   102,   1229,   -306], 0, [  6610,    478], [0x7c, 0x89, 0x79, 0xff]],
];

// 0x07009530 - 0x07009610
const bitdw_seg7_vertex_07009530 = [
    [[ -1740,   -818,   -306], 0, [     0,    990], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1740,    205,   -306], 0, [  1842,   -884], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1125,    205,   -306], 0, [  2864,    138], [0x7c, 0x89, 0x79, 0xff]],
    [[   102,   1229,   -306], 0, [  6610,    478], [0x7c, 0x89, 0x79, 0xff]],
    [[   307,    955,   -306], 0, [  6326,   1442], [0x7c, 0x89, 0x79, 0xff]],
    [[   717,   1229,   -306], 0, [  7632,   1498], [0x7c, 0x89, 0x79, 0xff]],
    [[   922,   1024,   -204], 0, [  7632,   2180], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1740,   -818,    307], 0, [     0,    990], [0x7c, 0x89, 0x79, 0xff]],
    [[   102,   1229,    307], 0, [  6610,    478], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1125,    205,    307], 0, [  2864,    138], [0x7c, 0x89, 0x79, 0xff]],
    [[   717,   1229,    307], 0, [  7632,   1498], [0x7c, 0x89, 0x79, 0xff]],
    [[   102,   1229,    307], 0, [  6612,    478], [0x7c, 0x89, 0x79, 0xff]],
    [[   307,    955,    307], 0, [  6326,   1442], [0x7c, 0x89, 0x79, 0xff]],
    [[ -1740,    205,    307], 0, [  1842,   -884], [0x7c, 0x89, 0x79, 0xff]],
];

// 0x07009610 - 0x07009690
const bitdw_seg7_vertex_07009610 = [
    [[ -1740,   -613,    307], 0, [   990,      0], [0x68, 0x7b, 0x6e, 0xff]],
    [[ -1740,    205,    307], 0, [  2352,   1328], [0x68, 0x7b, 0x6e, 0xff]],
    [[ -1740,    205,   -306], 0, [  1330,   2350], [0x68, 0x7b, 0x6e, 0xff]],
    [[ -1740,   -613,   -306], 0, [     0,    990], [0x68, 0x7b, 0x6e, 0xff]],
    [[   717,   1229,   -306], 0, [  2012,    990], [0xb7, 0xcd, 0xba, 0xff]],
    [[   102,   1229,   -306], 0, [   990,   2010], [0xb7, 0xcd, 0xba, 0xff]],
    [[   102,   1229,    307], 0, [     0,    990], [0xb7, 0xcd, 0xba, 0xff]],
    [[   717,   1229,    307], 0, [   990,      0], [0xb7, 0xcd, 0xba, 0xff]],
];

// 0x07009690 - 0x07009790
const bitdw_seg7_vertex_07009690 = [
    [[  1946,   1331,    205], 0, [   862,    -30], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1741,   1229,    717], 0, [     0,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  2150,   1229,    307], 0, [   990,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  2150,   1229,   -306], 0, [     0,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1741,   1229,   -716], 0, [   990,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1638,   1331,   -511], 0, [   990,      0], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1946,   1331,   -204], 0, [   224,      0], [0xd2, 0xd2, 0xd2, 0xff]],
    [[   922,   1331,   -204], 0, [   862,    -30], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1126,   1229,   -716], 0, [     0,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[   717,   1229,   -306], 0, [   990,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1229,   1331,   -511], 0, [    96,    -30], [0xd2, 0xd2, 0xd2, 0xff]],
    [[   717,   1229,    307], 0, [     0,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1126,   1229,    717], 0, [   990,    990], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1229,   1331,    512], 0, [   990,      0], [0xd2, 0xd2, 0xd2, 0xff]],
    [[   922,   1331,    205], 0, [   224,      0], [0xd2, 0xd2, 0xd2, 0xff]],
    [[  1638,   1331,    512], 0, [    96,    -30], [0xd2, 0xd2, 0xd2, 0xff]],
];

// 0x07009790 - 0x07009880
const bitdw_seg7_vertex_07009790 = [
    [[   717,   1229,    307], 0, [   990,    990], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   922,   1331,    205], 0, [   820,    -48], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   922,   1331,   -204], 0, [   138,    -48], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   717,   1229,   -306], 0, [     0,    990], [0xbe, 0xbe, 0xbe, 0xff]],
    [[  2150,   1229,   -306], 0, [   990,    990], [0xbe, 0xbe, 0xbe, 0xff]],
    [[  1946,   1331,    205], 0, [   308,      0], [0xbe, 0xbe, 0xbe, 0xff]],
    [[  2150,   1229,    307], 0, [     0,    990], [0xbe, 0xbe, 0xbe, 0xff]],
    [[  1946,   1331,   -204], 0, [   990,      0], [0xbe, 0xbe, 0xbe, 0xff]],
    [[   717,   1229,   -306], 0, [   990,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1126,   1229,   -716], 0, [     0,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   922,   1024,   -204], 0, [   862,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  2150,   1229,    307], 0, [   990,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1741,   1229,    717], 0, [     0,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1946,   1024,    205], 0, [   862,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1638,   1024,    512], 0, [    96,    526], [0x7d, 0x7d, 0x7d, 0xff]],
];

// 0x07009880 - 0x07009970
const bitdw_seg7_vertex_07009880 = [
    [[   922,   1024,    205], 0, [   154,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1229,   1024,    512], 0, [   920,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   717,   1229,    307], 0, [     0,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1126,   1229,    717], 0, [   990,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1638,   1024,   -511], 0, [   920,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1741,   1229,   -716], 0, [   990,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  2150,   1229,   -306], 0, [     0,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1126,   1229,   -716], 0, [     0,    990], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1229,   1024,   -511], 0, [    96,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[   922,   1024,   -204], 0, [   862,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1946,   1024,   -204], 0, [   154,    526], [0x7d, 0x7d, 0x7d, 0xff]],
    [[  1229,   1331,   -511], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1741,   1229,   -716], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1126,   1229,   -716], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,   1331,   -511], 0, [   308,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07009970 - 0x07009A70
const bitdw_seg7_vertex_07009970 = [
    [[  1638,   1331,    512], 0, [   820,    -26], [0xff, 0xff, 0xff, 0xff]],
    [[  1229,   1331,    512], 0, [   138,    -26], [0xff, 0xff, 0xff, 0xff]],
    [[  1126,   1229,    717], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1741,   1229,    717], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2150,   1229,    307], 0, [     0,    990], [0x64, 0x64, 0x64, 0xff]],
    [[  1946,   1024,    205], 0, [   206,    582], [0x64, 0x64, 0x64, 0xff]],
    [[  2150,   1229,   -306], 0, [   990,    990], [0x64, 0x64, 0x64, 0xff]],
    [[  1946,   1024,   -204], 0, [   888,    582], [0x64, 0x64, 0x64, 0xff]],
    [[  1741,   1229,    717], 0, [   990,    990], [0x96, 0x96, 0x96, 0xff]],
    [[  1126,   1229,    717], 0, [     0,    990], [0x96, 0x96, 0x96, 0xff]],
    [[  1638,   1024,    512], 0, [   820,    584], [0x96, 0x96, 0x96, 0xff]],
    [[  1229,   1024,    512], 0, [   138,    584], [0x96, 0x96, 0x96, 0xff]],
    [[  1126,   1229,   -716], 0, [   990,    990], [0x96, 0x96, 0x96, 0xff]],
    [[  1741,   1229,   -716], 0, [     0,    990], [0x96, 0x96, 0x96, 0xff]],
    [[  1229,   1024,   -511], 0, [   888,    582], [0x96, 0x96, 0x96, 0xff]],
    [[  1638,   1024,   -511], 0, [   206,    582], [0x96, 0x96, 0x96, 0xff]],
];

// 0x07009A70 - 0x07009B60
const bitdw_seg7_vertex_07009A70 = [
    [[ -1433,   -204,    922], 0, [  1194,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1740,   -306,    922], 0, [  2420,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1433,   -306,    922], 0, [  1194,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1740,   -204,    922], 0, [  2420,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1125,     51,    922], 0, [     0,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1433,    -50,    922], 0, [  1194,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1125,    -50,    922], 0, [     0,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1433,     51,    922], 0, [  1194,    990], [0x7f, 0xac, 0x52, 0xff]],
    [[ -1433,    205,    307], 0, [  1194,  -1462], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1740,    205,    307], 0, [  2420,  -1462], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1637,    154,    614], 0, [  2012,   -236], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1433,   -204,    307], 0, [  1194,  -1462], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1740,   -204,    922], 0, [  2420,    990], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1433,   -204,    922], 0, [  1194,    990], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1740,   -204,    307], 0, [  2420,  -1462], [0xa5, 0xd8, 0x8c, 0xff]],
];

// 0x07009B60 - 0x07009C50
const bitdw_seg7_vertex_07009B60 = [
    [[ -1433,     51,    614], 0, [  1194,   -236], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1125,     51,    922], 0, [     0,    990], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1125,     51,    307], 0, [     0,  -1462], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1433,     51,    922], 0, [  1194,    990], [0xa5, 0xd8, 0x8c, 0xff]],
    [[ -1637,     51,    614], 0, [   480,    734], [0x70, 0xac, 0x52, 0xff]],
    [[ -1433,    -50,    614], 0, [     0,    990], [0x70, 0xac, 0x52, 0xff]],
    [[ -1433,     51,    614], 0, [     0,    734], [0x70, 0xac, 0x52, 0xff]],
    [[ -1637,    154,    614], 0, [   480,    480], [0x70, 0xac, 0x52, 0xff]],
    [[ -1740,   -306,    307], 0, [  2420,  -1462], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1433,   -306,    307], 0, [  1194,  -1462], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1433,   -306,    922], 0, [  1194,    990], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1740,   -306,    922], 0, [  2420,    990], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1637,     51,    614], 0, [  2012,   -236], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1433,    -50,    307], 0, [  1194,  -1462], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1433,    -50,    614], 0, [  1194,   -236], [0x38, 0x4a, 0x3d, 0xff]],
];

// 0x07009C50 - 0x07009D50
const bitdw_seg7_vertex_07009C50 = [
    [[ -1433,    -50,    307], 0, [  1194,  -1462], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1125,    -50,    922], 0, [     0,    990], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1433,    -50,    922], 0, [  1194,    990], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1125,    -50,    307], 0, [     0,  -1462], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1740,    102,    307], 0, [  2420,  -1462], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1637,     51,    614], 0, [  2012,   -236], [0x38, 0x4a, 0x3d, 0xff]],
    [[ -1433,    205,    307], 0, [  1194,  -1462], [0x95, 0xcd, 0x7a, 0xff]],
    [[ -1637,    154,    614], 0, [  2012,   -236], [0x95, 0xcd, 0x7a, 0xff]],
    [[ -1433,     51,    614], 0, [  1194,   -236], [0x95, 0xcd, 0x7a, 0xff]],
    [[ -1125,     51,    307], 0, [     0,  -1462], [0x95, 0xcd, 0x7a, 0xff]],
    [[ -1637,    154,    614], 0, [   734,   -160], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,    205,    307], 0, [  1502,   -288], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,    102,    307], 0, [  1502,      0], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,   -306,    922], 0, [     0,    990], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,   -204,    922], 0, [     0,    734], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,   -204,    307], 0, [  1502,    734], [0x69, 0x8a, 0x4e, 0xff]],
];

// 0x07009D50 - 0x07009E30
const bitdw_seg7_vertex_07009D50 = [
    [[ -1740,   -306,    922], 0, [     0,    990], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,   -204,    307], 0, [  1502,    734], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,   -306,    307], 0, [  1502,    990], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,   -306,    307], 0, [  1502,    990], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,   -204,    307], 0, [  1502,    734], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,   -204,    922], 0, [     0,    734], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,   -306,    922], 0, [     0,    990], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1125,    -50,    307], 0, [  1502,    352], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1125,     51,    307], 0, [  1502,     96], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1125,     51,    922], 0, [     0,     96], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1125,    -50,    922], 0, [     0,    352], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,     51,    614], 0, [   734,     96], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,    -50,    614], 0, [   734,    352], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,     51,    922], 0, [     0,     96], [0x69, 0x8a, 0x4e, 0xff]],
];

// 0x07009E30 - 0x07009E90
const bitdw_seg7_vertex_07009E30 = [
    [[ -1637,     51,    614], 0, [   734,     96], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1637,    154,    614], 0, [   734,   -160], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1740,    102,    307], 0, [  1502,      0], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,    -50,    614], 0, [   734,    352], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,    -50,    922], 0, [     0,    352], [0x69, 0x8a, 0x4e, 0xff]],
    [[ -1433,     51,    922], 0, [     0,     96], [0x69, 0x8a, 0x4e, 0xff]],
];

// 0x07009E90 - 0x07009F10
const bitdw_seg7_vertex_07009E90 = [
    [[  1638,   1024,    512], 0, [  2012,    990], [0x44, 0x44, 0x44, 0xff]],
    [[  1229,   1024,    512], 0, [     0,    990], [0x44, 0x44, 0x44, 0xff]],
    [[  1229,   1024,   -511], 0, [     0,  -1566], [0x44, 0x44, 0x44, 0xff]],
    [[  1946,   1024,    205], 0, [  3546,    224], [0x44, 0x44, 0x44, 0xff]],
    [[   922,   1024,    205], 0, [ -1564,    224], [0x44, 0x44, 0x44, 0xff]],
    [[  1638,   1024,   -511], 0, [  2012,  -1566], [0x44, 0x44, 0x44, 0xff]],
    [[  1946,   1024,   -204], 0, [  3546,   -798], [0x44, 0x44, 0x44, 0xff]],
    [[   922,   1024,   -204], 0, [ -1564,   -798], [0x44, 0x44, 0x44, 0xff]],
];

// 0x07009F10 - 0x07009F90
const bitdw_seg7_vertex_07009F10 = [
    [[  1229,   1331,   -511], 0, [  1672,   2692], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,   1331,    512], 0, [   650,    308], [0xff, 0xff, 0xff, 0xff]],
    [[  1946,   1331,    205], 0, [  1672,    308], [0xff, 0xff, 0xff, 0xff]],
    [[  1946,   1331,   -204], 0, [  2352,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,   1331,   -511], 0, [  2352,   2010], [0xff, 0xff, 0xff, 0xff]],
    [[   922,   1331,   -204], 0, [   650,   2692], [0xff, 0xff, 0xff, 0xff]],
    [[   922,   1331,    205], 0, [     0,   2010], [0xff, 0xff, 0xff, 0xff]],
    [[  1229,   1331,    512], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07009F90 - 0x0700A058
const bitdw_seg7_dl_07009F90 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09007000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07009430, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  3,  0, 0x0,  4,  5,  3, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles(12, 11, 13, 0x0, 14, 15,  6, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009530, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0,  7,  9, 13, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009610, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A058 - 0x0700A188
const bitdw_seg7_dl_0700A058 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bitdw_seg7_texture_07001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07009690, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0,  0, 15,  1, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009790, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(12, 14, 13, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009880, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles(10,  4,  6, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009970, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A188 - 0x0700A2B8
const bitdw_seg7_dl_0700A188 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09000800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07009A70, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009B60, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP1Triangle(12, 13, 14, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009C50, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  0,  5, 0x0,  6,  7,  8, 0x0),
    gsSP2Triangles( 8,  9,  6, 0x0, 10, 11, 12, 0x0),
    gsSP1Triangle(13, 14, 15, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009D50, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(bitdw_seg7_vertex_07009E30, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A2B8 - 0x0700A310
const bitdw_seg7_dl_0700A2B8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09004800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07009E90, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0,  5,  6,  2, 0x0),
    gsSP2Triangles( 6,  3,  2, 0x0,  4,  7,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A310 - 0x0700A368
const bitdw_seg7_dl_0700A310 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitdw_seg7_vertex_07009F10, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
    gsSP2Triangles( 0,  5,  6, 0x0,  0,  7,  1, 0x0),
    gsSP2Triangles( 0,  6,  7, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A368 - 0x0700A3F8
export const bitdw_seg7_dl_0700A368 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitdw_seg7_dl_07009F90),
    gsSPDisplayList(bitdw_seg7_dl_0700A058),
    gsSPDisplayList(bitdw_seg7_dl_0700A188),
    gsSPDisplayList(bitdw_seg7_dl_0700A2B8),
    gsSPDisplayList(bitdw_seg7_dl_0700A310),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
