import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import RightSidebar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';


const Home = () => {
    const loggedIn = { firstName: "Ayanda", lastName: "Makhubu", email: "ayanda@gmail.com" };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1750.86}
                    />
                    
                </header>
                RECENT TRANSACTIONS
            </div>

            
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50}, { currentBalance: 500.75}]}
                
            />

        </section>
    )
}

export default Home
