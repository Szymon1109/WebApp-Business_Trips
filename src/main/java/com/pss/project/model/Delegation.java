package com.pss.project.model;

import com.pss.project.util.AutoCapacity;
import com.pss.project.util.Transport;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Delegation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @NotNull
    private LocalDateTime dateTimeStart;

    @NotNull
    private LocalDateTime dateTimeStop;

    @Column(columnDefinition = "integer default 30")
    private Integer travelDietAmount;

    @Column(columnDefinition = "integer default 0")
    private Integer breakfastNumber;

    @Column(columnDefinition = "integer default 0")
    private Integer dinnerNumber;

    @Column(columnDefinition = "integer default 0")
    private Integer supperNumber;

    private Transport transport;
    private Integer ticketPrice;
    private AutoCapacity autoCapacity;
    private Integer distance;
    private Integer accommodationPrice;
    private Integer otherTicketsPrice;
    private String otherOutlayDesc;
    private Integer otherOutlayPrice;
}
