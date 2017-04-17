import React from 'react';
import Talk from '../containers/Talk'

export default class Home extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div class="flex-container">
                <aside class="mod w20 pam aside">
                    Left
                </aside>
                <main class="flex-item-fluid pal">
                    <h3>Doloribus asperiores</h3>
                    <p class="justify">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                    </p>
                    <Talk/>
                </main>
                <aside class="mod w20 pam aside">
                    Right
                </aside>
            </div>
        );
    }
}