import React from 'react';
export const Footer=()=>{
    
    let footerList={
        position: 'relative',
        top: '100vh',
        width: '100%'
    }
    return (
     
        <div>
            <footer className="text-light bg-dark py-3" style={footerList}>
                <p className="text-center">Copyright &copy; MyTodoList.com</p>
            </footer>
        </div>
    )
}