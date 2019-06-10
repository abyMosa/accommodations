import React from 'react';
import cn from 'classnames';

const Col = ({  xs1, xs2, xs3, xs4, xs5, xs6, xs7, xs8, xs9, xs10, xs11, xs12,
                sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12,
                md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12,
                lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12,
                xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11, xl12,
                rt1, rt2, rt3, rt4, rt5, rt6, rt7, rt8, rt9, rt10, rt11, rt12,
                className, ...props }) => {
    return (
        <div 
        className={cn(
            "col",
            xs1 && "col--xs--1", xs2 && "col--xs--2", xs3 && "col--xs--3", xs4 && "col--xs--4", xs5 && "col--xs--5", xs6 && "col--xs--6", 
            xs7 && "col--xs--7", xs8 && "col--xs--8", xs9 && "col--xs--9", xs10 && "col--xs--10", xs11 && "col--xs--11", xs12 && "col--xs--12",
            sm1 && "col--sm--1", sm2 && "col--sm--2", sm3 && "col--sm--3", sm4 && "col--sm--4", sm5 && "col--sm--5", sm6 && "col--sm--6", 
            sm7 && "col--sm--7", sm8 && "col--sm--8", sm9 && "col--sm--9", sm10 && "col--sm--10", sm11 && "col--sm--11", sm12 && "col--sm--12",
            md1 && "col--md--1", md2 && "col--md--2", md3 && "col--md--3", md4 && "col--md--4", md5 && "col--md--5", md6 && "col--md--6", 
            md7 && "col--md--7", md8 && "col--md--8", md9 && "col--md--9", md10 && "col--md--10", md11 && "col--md--11", md12 && "col--md--12",
            lg1 && "col--lg--1", lg2 && "col--lg--2", lg3 && "col--lg--3", lg4 && "col--lg--4", lg5 && "col--lg--5", lg6 && "col--lg--6", 
            lg7 && "col--lg--7", lg8 && "col--lg--8", lg9 && "col--lg--9", lg10 && "col--lg--10", lg11 && "col--lg--11", lg12 && "col--lg--12",
            xl1 && "col--xl--1", xl2 && "col--xl--2", xl3 && "col--xl--3", xl4 && "col--xl--4", xl5 && "col--xl--5", xl6 && "col--xl--6", 
            xl7 && "col--xl--7", xl8 && "col--xl--8", xl9 && "col--xl--9", xl10 && "col--xl--10", xl11 && "col--xl--11", xl12 && "col--xl--12",
            rt1 && "col--rt--1", rt2 && "col--rt--2", rt3 && "col--rt--3", rt4 && "col--rt--4", rt5 && "col--rt--5", rt6 && "col--rt--6", 
            rt7 && "col--rt--7", rt8 && "col--rt--8", rt9 && "col--rt--9", rt10 && "col--rt--10", rt11 && "col--rt--11", rt12 && "col--rt--12",
            className
        )}
        {...props}
        ></div>
    );
};

export default React.memo(Col);