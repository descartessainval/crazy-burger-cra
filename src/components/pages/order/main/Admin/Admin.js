import React, {useState } from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';


const Admin = () => {
    const [isCollapse, setIsCollapse] = useState(false);

    return (
        <PanelStyled  >
                <div >
                    <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse}/>
                  {/* quand est ce que j'affucher Panel admin quand isCollapse */}
                    {!isCollapse && <AdminPanel/>}
                </div>
        </PanelStyled>
    )
}

const PanelStyled = styled.div`
position: absolute;
bottom: 0;
right: 0;
left: 0;
`
export default Admin