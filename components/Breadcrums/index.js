const Breadcrums = ({ breadcrums }) => {
    const last_item = breadcrums.length - 1;
    const elements = breadcrums.map((breadcrum, index) => {
        if (index == last_item ) {
            return (
                <div>
                    <li><b>{breadcrum}</b></li>
                </div>
            ); 
        }
        return (
            <div>
                <li>{breadcrum}</li>
                <li>&gt;</li>
            </div>
        );
    });
    return (
        <ul>
            {elements}
        </ul>
    );
}
export default Breadcrums;