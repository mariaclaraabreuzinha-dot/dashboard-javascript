const usuarios = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    password: "123456",
    phone: "+55 85 99999-1111",
    cpf: "123.456.789-00",
    birth_date: "1990-05-15",
    is_active: true,
    role: "customer",
    created_at: "2026-04-01T10:00:00Z",
    addresses: [
      {
        id: 101,
        street: "Rua A",
        number: "100",
        complement: null,
        neighborhood: "Centro",
        city: "Fortaleza",
        state: "CE",
        zip_code: "60000-000",
        is_default: true
      }
    ],
    preferences: { newsletter: true, sms_notifications: false }
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria@email.com",
    password: "123456",
    phone: "+55 11 98888-2222",
    cpf: "987.654.321-00",
    birth_date: "1985-09-22",
    is_active: true,
    role: "customer",
    created_at: "2026-03-20T08:00:00Z",
    addresses: [],
    preferences: { newsletter: false, sms_notifications: true }
  },
  {
    id: 3,
    name: "Carlos Souza",
    email: "carlos@email.com",
    password: "123456",
    phone: "+55 21 97777-3333",
    cpf: "456.789.123-00",
    birth_date: "1995-12-10",
    is_active: false,
    role: "customer",
    created_at: "2026-02-10T14:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: true }
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana@email.com",
    password: "admin123",
    phone: "+55 31 96666-4444",
    cpf: "321.654.987-00",
    birth_date: "2000-01-05",
    is_active: true,
    role: "admin",
    created_at: "2026-01-05T09:00:00Z",
    addresses: [],
    preferences: { newsletter: false, sms_notifications: false }
  },
  {
    id: 5,
    name: "Pedro Santos",
    email: "pedro@email.com",
    password: "123456",
    phone: "+55 85 95555-5555",
    cpf: "159.753.486-00",
    birth_date: "1992-07-30",
    is_active: true,
    role: "customer",
    created_at: "2026-04-10T16:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: true }
  },
  {
    id: 6,
    name: "Lucas Mendes",
    email: "lucas@email.com",
    password: "123456",
    phone: "+55 85 94444-6666",
    cpf: "258.369.147-00",
    birth_date: "1993-03-18",
    is_active: true,
    role: "customer",
    created_at: "2026-03-01T12:00:00Z",
    addresses: [],
    preferences: { newsletter: false, sms_notifications: true }
  },
  {
    id: 7,
    name: "Fernanda Lima",
    email: "fernanda@email.com",
    password: "123456",
    phone: "+55 85 93333-7777",
    cpf: "369.258.147-00",
    birth_date: "1988-11-25",
    is_active: true,
    role: "customer",
    created_at: "2026-02-15T11:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: false }
  },
  {
    id: 8,
    name: "Rafael Alves",
    email: "rafael@email.com",
    password: "123456",
    phone: "+55 85 92222-8888",
    cpf: "741.852.963-00",
    birth_date: "1991-06-12",
    is_active: true,
    role: "customer",
    created_at: "2026-01-20T10:30:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: true }
  },
  {
    id: 9,
    name: "Juliana Rocha",
    email: "juliana@email.com",
    password: "123456",
    phone: "+55 85 91111-9999",
    cpf: "852.741.963-00",
    birth_date: "1997-04-09",
    is_active: false,
    role: "customer",
    created_at: "2026-03-12T14:30:00Z",
    addresses: [],
    preferences: { newsletter: false, sms_notifications: false }
  },
  {
    id: 10,
    name: "Bruno Ribeiro",
    email: "bruno@email.com",
    password: "123456",
    phone: "+55 85 90000-0000",
    cpf: "963.852.741-00",
    birth_date: "1989-08-19",
    is_active: true,
    role: "customer",
    created_at: "2026-04-15T18:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: true }
  },
  {
    id: 11,
    name: "Camila Duarte",
    email: "camila@email.com",
    password: "123456",
    phone: "+55 85 98888-1111",
    cpf: "111.222.333-44",
    birth_date: "1994-10-02",
    is_active: true,
    role: "customer",
    created_at: "2026-02-01T09:15:00Z",
    addresses: [],
    preferences: { newsletter: false, sms_notifications: true }
  },
  {
    id: 12,
    name: "Eduardo Freitas",
    email: "eduardo@email.com",
    password: "123456",
    phone: "+55 85 97777-2222",
    cpf: "222.333.444-55",
    birth_date: "1987-02-14",
    is_active: true,
    role: "customer",
    created_at: "2026-01-25T13:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: false }
  },
  {
    id: 13,
    name: "Patricia Gomes",
    email: "patricia@email.com",
    password: "123456",
    phone: "+55 85 96666-3333",
    cpf: "333.444.555-66",
    birth_date: "1996-07-07",
    is_active: true,
    role: "customer",
    created_at: "2026-04-05T17:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: true }
  },
  {
    id: 14,
    name: "Diego Martins",
    email: "diego@email.com",
    password: "123456",
    phone: "+55 85 95555-4444",
    cpf: "444.555.666-77",
    birth_date: "1998-03-03",
    is_active: true,
    role: "customer",
    created_at: "2026-03-30T15:45:00Z",
    addresses: [],
    preferences: { newsletter: false, sms_notifications: true }
  },
  {
    id: 15,
    name: "Larissa Nunes",
    email: "larissa@email.com",
    password: "123456",
    phone: "+55 85 94444-5555",
    cpf: "555.666.777-88",
    birth_date: "2001-12-21",
    is_active: true,
    role: "customer",
    created_at: "2026-04-18T19:00:00Z",
    addresses: [],
    preferences: { newsletter: true, sms_notifications: false }
  }
]

function login() {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    let usuario = usuarios.find((usuario) => 
        usuario.email === email && usuario.password === password
    )
    
    if(usuario){
        window.location.href="../dashboard/dashboard.html"
        return
    }

    let pCredenciaisInvalidas = document.querySelector(".credenciaisInvalidas")
    
    if(pCredenciaisInvalidas === null ) {
    let p = document.createElement("p")
    p.innerText = "Credenciais inválidas"
    p.classList.add("credenciaisInvalidas")

    let inputGroup = document.querySelector("#input-group")
    inputGroup.appendChild(p)  
    return
    }


    
}