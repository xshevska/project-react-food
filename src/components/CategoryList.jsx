import { CategoryItem } from './CategoryItem';

//принимает каталог со значение по умолчанию
function CategoryList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export { CategoryList };