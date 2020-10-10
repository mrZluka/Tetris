export default class Game {
    score = 0; //лічильник балів
    lines = 0  //лічильник ліній
    level = 0 //лічильник рівнів
    playField = [ //ігрове поле
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    activePiece = { //активна фігура
        x: 0, //координата х
        y: 0, //координата y
        //контур активної фігури
        blocks: [
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ]
    };
    //переміститись в ліво
    movePieceLeft() {
        this.activePiece.x -= 1;
        if(this.hasCollision()) {
            this.activePiece.x += 1;
        }
    }

    //переміститись в ліво
    movePieceRight() {
        this.activePiece.x += 1;
        if(this.hasCollision()) {
            this.activePiece.x -= 1;
        }
    }

    //переміститись в ліво
    movePieceDown() {
        this.activePiece.y += 1;
        if(this.hasCollision()) {
            this.activePiece.y -= 1;
            this.lockPiece();
        }
    }

    //перевірка виходу за межі
    hasCollision() {
        //реструктуризація
        const {x: pieceX, y: pieceY, blocks} = this.activePiece;
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (
                    blocks[y][x] && //перевірка наявності фігури
                    ((this.playField[pieceY + y] === undefined || this.playField[pieceY + y][pieceX + x] === x) || //перевірка знаходження в ігровому полі
                        this.playField[pieceY + y][pieceX + x]) //перевірка вільного місця під фігуру
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    //переносимо значення активної фігури в ігрове поле
    lockPiece() {
        const {x: pieceX, y: pieceY, blocks} = this.activePiece;
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x])
                    this.playField[pieceY + y][pieceX + x] = blocks[y][x];
            }
        }
    }
}
