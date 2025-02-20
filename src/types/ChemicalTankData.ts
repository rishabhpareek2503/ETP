export interface TankData {
    type: string;
    BarScreen: number;
    OilGreaseTank: number;
    EqualizationTank: number;
    PHNeutralizationTank: number;
    CoagulantsTank: number;
    FlocculantTank: number;
    FilterFeedTank: number;
    TreatedWaterTank: number;
    UFWaterTank: number;
    SludgeHoldingTank: number;
    volume: number;
    length: number;  // Will be constant 3
    height: number;  // Will be constant 3
    breath: {
        barScreen: number;
        oilGrease: number;
        equalization: number;
        PHNeutralizationTank: number;
        CoagulantsTank: number;
        FlocculantTank: number;
        tubeSettle: number;
        filterFeed: number;
        treatedWater: number;
        uf: number;
        sludge: number;
    };
}