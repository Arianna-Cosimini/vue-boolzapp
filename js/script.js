const { createApp } = Vue

createApp({
    data() {
        return {
            // tengo traccia delle chat attive
            activeMessageIndex: 0,

            // tiene traccia del messaggio inserito nell'input dell'invio
            newElement: "",

            // tengo traccia delle lettere inserite nell'input per ricercare l nome di un utente
            searchWord: "",

            // array inizializzato vuoto per inserire le parole corrispondenti alla ricerca dell'utente nella chat
            filterContacts: [],

            // inizializzo stringa vuota per cambiare lo stato della chat durante la conversazione
            userStatus: "", 

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024',
                            hour: '15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2024',
                            hour: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2024',
                            hour: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2024',
                            hour: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2024',
                            hour: '10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2024',
                            hour: '10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2024',
                            hour: '16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024',
                            hour: '15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024',
                            hour: '15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024',
                            hour: '15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024',
                            hour: '15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024',
                            hour: '15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024',
                            hour: '15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        }


    },

    /*definisco la proprietà calcolata in questo modo ogni volta che la parola inserita
    dall'utente cambia la proprietà filteredContacts viene ricalcolata ottenendo cosi i nomi
    filtrati in base alle parole scritte dall'utente
    
    */
    computed: {
        filteredContacts() {
            if (this.searchWord === "") {
                return this.contacts;
            } else {
                return this.contacts.filter(contact =>
                    contact.name.toLowerCase().includes(this.searchWord.toLowerCase())
                );
            }
        },
    },


    methods: {
        // metodo per far apparire la conversazione se digito sulla chat
        changeMessage(index) {
            console.log(index)
            this.activeMessageIndex = index
        },

        // metodo per aggiungere il messaggio dal campo di input
        addElement() {
            let now = new Date()
            let hour = now.getHours()
            let minutes = now.getMinutes()


            // let day = now.getDate();
            // let month = now.getMonth() + 1;
            // let year = now.getFullYear();






            // array con risposte per metodo random
            let things = [

                "CI SONO MOMENTI IN CUI TUTTO VA BENE: NON TI SPAVENTARE, NON DURA",
                "Il mio oroscopo di oggi è stato chiaro: lascia stare, se cambia qualcosa mi faccio sentire io.",
                "Anche stamattina ho trasformato l’acqua in caffè, ma resto umile",
                "Giuro solennemente di non avere buone intenzioni",
                "Arrivo tra 10 minuti. Se non mi vedi arrivare rileggi il messaggio.",
                "La vita è come una scatola di cioccolatini, non sai mai quello che ti capita!",
                "Qualche sciocchezza di tanto in tanto aiuta l'uomo a vivere d'incanto",

            ];

            // associato variabile ad array con  metodo random
            let thing = things[Math.floor(Math.random() * things.length)];


            // Controllo per verificare se il campo di input è vuoto
            if (this.newElement.trim() === "") {
                return;
            }

            
            // lo stato della chat mentre l'utente scrive
            this.userStatus = 'Sta scrivendo...'
           
            // dopo due secondi faccio apparire la scritta online
            setTimeout(() => {
                this.userStatus = "online"
            }, 2000)

            // dopo 4 secondi faccio apparire l'ultimo accesso con data e ora
            setTimeout(() =>{
                this.userStatus = `Ultimo accesso: ${hour}:${minutes}`
            },4000)

            // Aggiungo il testo scritto nel campo di input al messaggio del contatto attivo
            if (this.activeMessageIndex !== null) { // Controllo se è stato selezionato un contatto

                // inserisco nell'array il messaggio con status sent
                this.contacts[this.activeMessageIndex].messages.push({
                    message: this.newElement,
                    status: 'sent',
                    hour: `${hour}:${minutes}`,
                    // date: `${day}/${month}/${year}`,
                });


            }

                // Cancella il contenuto del campo di input dopo l'aggiunta del messaggio
                this.newElement = "";

            // faccio apparire dopo un secondo un messaggio di risposta con status received
            setTimeout(() => {



                this.contacts[this.activeMessageIndex].messages.push({
                    message: `${thing}`,
                    status: 'received',
                    hour: `${hour}:${minutes}`,
                    // date: `${day}/${month}/${year}`,

                });
            }, 1000)

        },

        // filtro i nomi nei contatti 
        researchWords(word) {
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(word.toLowerCase())
            );
        },

        //   inseisco i nomi filtrati nell'array filterContacts

        filterWords() {
            this.filterContacts = this.contacts.filter(this.researchWords);
        },

        //   metodo per eliminare i messaggi tramite il dropdown menu
        deleteMessage(messageIndex) {

            this.contacts[this.activeMessageIndex].messages.splice(messageIndex, 1);

        },

        deleteMessageAll(){
            this.contacts[this.activeMessageIndex].messages.splice(2)
        },

        deleteElement(chat){
            this.contacts.splice(chat,1)
        },

    }
}).mount('#app');