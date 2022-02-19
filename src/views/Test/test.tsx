import { FC } from 'react';
import api from '../../lib/api';

interface ITest2Props {}

export const Test2: FC<ITest2Props> = (props) => {
    return (
        <div>
            <button
                style={{ width: 1000, height: 1000 }}
                onClick={async () => {
                    const data = await api.courses
                        .post({
                            graph: [
                                {
                                    name: 'Numeros Reales y sus Operaciones',
                                    linkedTo: [
                                        'Ecuaciones Lineales e Inigualdades',
                                        'Introducción a Funciones',
                                    ],
                                },
                                {
                                    name: 'Ecuaciones Lineales e Inigualdades',
                                    linkedTo: [],
                                },
                                {
                                    name: 'Introducción a Funciones',
                                    linkedTo: [],
                                },
                            ],

                            name: 'Mate 2: Reloaded',
                            description:
                                'Un curso de mate de pruebas pero con la lib',
                            code: 'MA-0001',
                            dependencies: ['MA-0001'],
                        })
                        .catch((error) => {
                            console.error('error');
                        });

                    console.log(data);
                }}
            >
                Text
            </button>
        </div>
    );
};
