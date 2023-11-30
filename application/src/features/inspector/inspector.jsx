
import Property from './Property';

const Inspector = ({

}) => {

    return (
        <div 
            className="d-flex flex-column w-100"
            style={{height: "256px"}}
        >

            <div className="p-2 bg-secondary">
                <h5>
                    Inspector
                </h5>
            </div>

            <Property Key="Name" Value="Concrete Wall - Bottom" />
            <Property Key="Id" Value="bnk_wall_conc_bottom" />
            <Property Key="Sprite" Value="bnk_interior_sheet.png" />
            <Property Key="Size" Value="32x8" />

        </div>
    );
};

export default Inspector;