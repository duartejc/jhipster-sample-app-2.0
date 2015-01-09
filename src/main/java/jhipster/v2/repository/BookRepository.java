package jhipster.v2.repository;

import jhipster.v2.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Book entity.
 */
public interface BookRepository extends JpaRepository<Book,Long>{

}
