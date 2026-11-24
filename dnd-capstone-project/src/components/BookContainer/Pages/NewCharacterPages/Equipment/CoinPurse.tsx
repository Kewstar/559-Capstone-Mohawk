import { CURRENCY_LIST } from "@/data/dnd5e_2014/inventory/currency";
import type { Coins, CurrencyDetails } from "@/data/dnd5e_2014/inventory/currency";


type CoinPurseProps = {
    coins: Coins;
};


/** One row showing how many of each coin the character holds. */
export function CoinPurse({ coins }: CoinPurseProps) {
    
    /**
     * Takes a single coin and renders it. 
     * 
     * @param currencyDetails The data for the coin to render. 
     * 
     * @returns HTML `<div>` containing the displayed info for that coin. 
     */
    function renderCoin(currencyDetails: CurrencyDetails) {
        const count = coins[currencyDetails.name];
        const classes = ["CoinCell", currencyDetails.name.toUpperCase()];

        if (count === 0) 
            classes.push("EmptyCoin");
            
        return (
            <div key={currencyDetails.name} className={`${classes.join(" ")} Stylized StickerSm`} title={currencyDetails.label}>
                <span className="CoinDisc" aria-hidden="true">{currencyDetails.name}</span>
                <span className="CoinCount">{count}</span>
            </div>
        );
    }

    return  <div className="CoinPurse RaceBubble Stylized Sticker">
                {CURRENCY_LIST.map(renderCoin)}
            </div>;
}