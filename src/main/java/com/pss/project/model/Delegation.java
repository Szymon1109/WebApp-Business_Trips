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
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "genB")
    @SequenceGenerator(name = "genB", initialValue = 1)
    private Long id;

    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @NotNull
    private LocalDateTime dateTimeStart;

    @NotNull
    private LocalDateTime dateTimeStop;

    private Integer travelDietAmount = 30;
    private Integer breakfastNumber = 0;
    private Integer dinnerNumber = 0;
    private Integer supperNumber = 0;

    private Transport transport;
    private Integer ticketPrice;
    private AutoCapacity autoCapacity;
    private Integer distance;
    private Integer accommodationPrice;
    private Integer otherTicketsPrice;
    private String otherOutlayDesc;
    private Integer otherOutlayPrice;

    public Delegation(String description, User user, LocalDateTime dateTimeStart,
                      LocalDateTime dateTimeStop, Transport transport, Integer ticketPrice,
                      AutoCapacity autoCapacity, Integer distance, Integer accommodationPrice,
                      Integer otherTicketsPrice, String otherOutlayDesc, Integer otherOutlayPrice) {
        this.description = description;
        this.user = user;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeStop = dateTimeStop;
        this.transport = transport;
        this.ticketPrice = ticketPrice;
        this.autoCapacity = autoCapacity;
        this.distance = distance;
        this.accommodationPrice = accommodationPrice;
        this.otherTicketsPrice = otherTicketsPrice;
        this.otherOutlayDesc = otherOutlayDesc;
        this.otherOutlayPrice = otherOutlayPrice;
    }
}
