import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' },
			{ id: 3, name: 'Ноутбуки' },
			{ id: 4, name: 'Телевизоры' },
		];
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'Honor' },
			{ id: 4, name: 'Xiaomi' },
			{ id: 5, name: 'Siemens' },
		];
		this._devices = [
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 100000,
				rating: 5,
				img: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
		];
		this._selectedType = {};
		this._selectedBrand = {};
		makeAutoObservable(this);
	}
	setTypes(types) {
		this._types = types;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	setDevices(devices) {
		this._devices = devices;
	}

	setSelectedType(type) {
		this._selectedType = type;
	}
	setSelectedBrand(brand) {
		this._selectedBrand = brand;
	}

	get types() {
		return this._types;
	}

	get brands() {
		return this._brands;
	}
	get devices() {
		return this._devices;
	}

	get selectedType() {
		return this._selectedType;
	}
	get selectedBrand() {
		return this._selectedBrand;
	}
}
