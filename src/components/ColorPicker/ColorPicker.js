import styles from './ColorPicker.module.css';
import { ColorItem } from './ColorItem/ColorItem';

export const ColorPicker = ({ setCurrentlyPicked }) => {

    const colorPalette = {
        "buttercream": '#ECE3CE',
        "desert-mist": '#DEB68B',
        "willow": '#998B53',
        "ultimate-gray": '#949597',
        "inkwell": '#363845',
        "illuminating": '#F3E05E',
        "marigold": '#FAAD5D',
        "rust": '#B35C35',
        "burnt-coral": '#E68A80',
        "raspberry-sorbet": '#CF3A6C',
        "green-ash": '#A2DAAB',
        "mint": '#1FA172',
        "cerulean": '#9EB6D3',
        "french-blue": '#1971B1',
        "amethyst-orchid": '#9069A5'
    }

    return (
        <div className={styles["container"]}>
            {
                Object.keys(colorPalette).map(c => <ColorItem 
                    key={c} 
                    colorName={c} 
                    color={colorPalette[c]} 
                    setCurrentlyPicked={setCurrentlyPicked} />)
            }
        </div>
    )
}