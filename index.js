let id = null;

const makeVariable = (id) => {
    return document.getElementById(id);
};

const input = (id, type = 'text', label = '', placeholder = '') => {
    return `
    <label>${label}</label><br>
    <input type="${type}" id="${id}" placeholder="${placeholder}"><br>
    `;
};

const button = (id, label) => {
    return `<button id="${id}">${label}</button>`;
};

const div = (id) => {
    return `<div id="${id}"></div>`;
};

const editData = (index) => {
    const namaAnggota = makeVariable('namaAnggota');
    const nomerTelepon = makeVariable('nomerTelepon');
    namaAnggota.value = data[index].nama;
    nomerTelepon.value = data[index].tlp;
    id = index;
};

const deleteData = (index) => {
    data.splice(index, 1);
    loadData(data, makeVariable('dataList'));
};

const loadData = (data, element) => {
    element.innerHTML = '';
    data.forEach((item, i) => {
        element.innerHTML += `
        <p>
        Nama Anggota  : ${item.nama} <br>
        Nomer Telepon : ${item.tlp} <button onclick="editData(${i})">Edit</button>
        <button onclick="deleteData(${i})">Hapus</button>
        </p>
        `;
    });
};

const clear = () => {
    const namaAnggota = makeVariable('namaAnggota');
    const nomerTelepon = makeVariable('nomerTelepon');
    namaAnggota.value = '';
    nomerTelepon.value = '';
    id = null;
};

let data = [
    {
        'nama': 'Devi Wulansari',
        'tlp': '081312108177'
    },
    {
        'nama': 'Mohammad Ridwan Bayu Pratama',
        'tlp': '082233167202'
    },
    {
        'nama': 'Barqiyah tiara putri',
        'tlp': '0822794888130'
    },
    {
        'nama': 'Ainul faradisa',
        'tlp': '082283920841'
    },
    {
        'nama': 'Asrorul Faradis',
        'tlp': '083833735305'
    },
    {
        'nama': 'Badruz zaman',
        'tlp': '081357861917'
    },
];

document.body.innerHTML += input('namaAnggota', 'text', 'Nama Anggota', 'Masukkan Nama Anggota');
document.body.innerHTML += input('nomerTelepon', 'text', 'Nomer Telepon', 'Masukkan Nomer Telepon');
document.body.innerHTML += button('btnSimpan', 'Simpan');
document.body.innerHTML += button('btnClear', 'Clear');
document.body.innerHTML += div('dataList');

const dataList = makeVariable('dataList');
const btnSimpan = makeVariable('btnSimpan');
const btnClear = makeVariable('btnClear');

loadData(data, dataList);

btnSimpan.addEventListener('click', () => {
    const namaAnggota = makeVariable('namaAnggota');
    const nomerTelepon = makeVariable('nomerTelepon');
    if (id == null) {
        data.push({
            'nama': namaAnggota.value,
            'tlp': nomerTelepon.value
        });
        clear();
    } else {
        data[id].nama = namaAnggota.value;
        data[id].tlp = nomerTelepon.value;
    }
    loadData(data, dataList);
});

btnClear.addEventListener('click', () => {
    clear();
});
