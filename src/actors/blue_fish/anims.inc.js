// 0x0301C1B0
const blue_fish_seg3_animvalue_0301C1B0 = [
    0x0000, 0xFFF1, 0xFFF1, 0xFFF2, 0xFFF4, 0xFFF7, 0xFFFA, 0xFFFD,
    0x0000, 0x0002, 0x0005, 0x0008, 0x000A, 0x000C, 0x000E, 0x000E,
    0x000E, 0x000D, 0x000C, 0x000A, 0x0009, 0x0006, 0x0004, 0x0002,
    0x0000, 0xFFFD, 0xFFFB, 0xFFF8, 0xFFF6, 0xFFF3, 0xFFF1, 0xC001,
    0xF3F6, 0xF61A, 0xFAF7, 0x003A, 0x0390, 0x052A, 0x06BA, 0x0832,
    0x0984, 0x0AA1, 0x0B7C, 0x0C06, 0x0C31, 0x0BEE, 0x0B2F, 0x078D,
    0x00B3, 0xF9AA, 0xF579, 0xF3FF, 0xF306, 0xF27B, 0xF247, 0xF258,
    0xF298, 0xF2F4, 0xF356, 0xF3AB, 0xF3DE, 0xF3DA, 0x461C, 0x4623,
    0x462E, 0x4629, 0x4603, 0x45AA, 0x450A, 0x4410, 0x42C9, 0x4151,
    0x3FC6, 0x3E45, 0x3CEA, 0x3BD2, 0x3B1B, 0x3ACE, 0x3AD5, 0x3B20,
    0x3BA0, 0x3C43, 0x3CFA, 0x3DB5, 0x3E7E, 0x3F66, 0x4066, 0x4177,
    0x4292, 0x43AF, 0x44C7, 0x45D4,
]

// 0x0301C268
const blue_fish_seg3_animindex_0301C268 = [
    0x001E, 0x0001, 0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x001F, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001E, 0x003E,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001E, 0x0020,
]

// 0x0301C298
const blue_fish_seg3_anim_0301C298 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x1E,
    unk0A: (blue_fish_seg3_animindex_0301C268.length / 6) - 1,
    values:  blue_fish_seg3_animvalue_0301C1B0,
    indices: blue_fish_seg3_animindex_0301C268,
}

// 0x0301C2B0
export const blue_fish_seg3_anims_0301C2B0 = [
    blue_fish_seg3_anim_0301C298,
    null,
]
