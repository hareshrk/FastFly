package com.haresh.fastfly.repository;

import com.haresh.fastfly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
