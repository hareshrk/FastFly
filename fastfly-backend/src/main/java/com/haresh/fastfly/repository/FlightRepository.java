package com.haresh.fastfly.repository;

import com.haresh.fastfly.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight,Long> {
}
